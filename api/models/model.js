import {beginTransaction, commitTransaction, executeTransaction, rollbackTransaction} from "../db/operations.js";
import {database} from "../db/database.js";

export class Model {
    isDeleted = false;
    attributes = {};
    id = null;
    static table = '';

    constructor(attributes) {
        this.attributes = attributes;
        this.constructor.table = this.constructor.table || this.constructor.name.toLowerCase() + 's';
    }

    static async findBy(attribute, value) {
        const query = `SELECT *
                       FROM ${this.table}
                       WHERE ${attribute} = ?`;
        const [rows] = await database.query(query, [value]);
        return rows.length ? rows.map(row => new this(row)) : null;
    }

    update(attribute, data) {
        this.attributes[attribute] = data;
    }

    delete() {
        this.isDeleted = true;
    }

    async save() {
        if (this.id === null) {
            await this._insert();
        } else if (this.isDeleted) {
            await this._delete();
        } else {
            await this._update();
        }
    }

    async _insert() {
        const columns = Object.keys(this.attributes).join(', ');
        const values = Object.values(this.attributes);
        const placeholders = values.map(() => '?').join(', ');

        const query = `INSERT INTO ${this.constructor.table} (${columns})
                       VALUES (${placeholders})`;
        await executeTransaction(query, values);

        const [[{id}]] = await database.query(`SELECT LAST_INSERT_ID() AS id`);
        this.id = id;
    }

    async _update() {
        const columns = Object.keys(this.attributes).map(col => `${col} = ?`).join(', ');
        const values = Object.values(this.attributes);

        const query = `UPDATE ${this.constructor.table}
                       SET ${columns}
                       WHERE id = ?`;
        await executeTransaction(query, [...values, this.id]);
    }

    async _delete() {
        const query = `DELETE
                       FROM ${this.constructor.table}
                       WHERE id = ?`;
        await executeTransaction(query, [this.id]);
    }
}