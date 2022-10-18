/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare class User {
    static create({ newUser }: any): Promise<import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static findByEmail({ email }: {
        email: string;
    }): Promise<import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static findById({ user_id }: {
        user_id: string;
    }): Promise<import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static findAll(): Promise<(import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static update({ user_id, fieldToUpdate, newValue }: {
        user_id: string;
        fieldToUpdate: string;
        newValue: any;
    }): Promise<import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export { User };
