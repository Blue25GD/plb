import {Model} from "./model.js";
import {Session} from "./session.js";
import crypto from 'crypto';

function _createRandomToken() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let token = '';
    const bytes = crypto.randomBytes(64);

    for (let i = 0; i < 64; i++) {
        token += chars[bytes[i] % chars.length];
    }

    return token;
}

export class User extends Model {
    static table = 'users';

    async createSession() {
        const session = new Session({
            user_id: this.id,
            token: _createRandomToken()
        })
        await session.save()
        return session
    }
}