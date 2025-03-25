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

        if (attributes.id) {
            this.id = attributes.id;
        }
    }

    static async findBy(attribute, value) {
        const query = `SELECT *
                       FROM ? ?
                       WHERE ?? = ?`;
        const [rows] = await database.query(query, [this.table, attribute, value]);
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
        const columns = Object.keys(this.attributes);
        const values = Object.values(this.attributes);
        const placeholders = values.map(() => '?').join(', ');

        const query = `INSERT INTO ?? (??) VALUES (${placeholders})`;
        await executeTransaction(query, [this.constructor.table, columns, ...values]);

        const [[{id}]] = await database.query(`SELECT LAST_INSERT_ID() AS id`);
        this.id = id;
    }

    async _update() {
        const columns = Object.keys(this.attributes);
        const values = Object.values(this.attributes);
        const setClause = columns.map(col => `?? = ?`).join(', ');

        const query = `UPDATE ?? SET ${setClause} WHERE id = ?`;
        const params = [];
        params.push(this.constructor.table);
        columns.forEach((col, index) => {
            params.push(col, values[index]);
        });
        params.push(this.id);

        await executeTransaction(query, params);
    }

    async _delete() {
        const query = `DELETE
                       FROM ${this.constructor.table}
                       WHERE id = ?`;
        await executeTransaction(query, [this.id]);
    }
}