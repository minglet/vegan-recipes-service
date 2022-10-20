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
declare class userAuthService {
    static addUser({ name, email, password }: {
        name: string;
        email: string;
        password: string;
    }): Promise<any>;
    static getUser({ email, password }: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        id: any;
        email: string;
        name: string;
        errorMessage: any;
    }>;
    static getUsers(): Promise<(import("mongoose").Document<unknown, any, {
        id: string;
        name: string;
        email: string;
        password: string;
        recipe_scraps: any[];
    }> & {
        id: string;
        name: string;
        email: string;
        password: string;
        recipe_scraps: any[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static setUser({ user_id, toUpdate }: {
        user_id: string;
        toUpdate: {
            recipe_scraps?: string[];
            name?: string;
            password?: string;
        };
    }): Promise<any>;
    static getUserInfo({ user_id }: {
        user_id: any;
    }): Promise<any>;
}
export { userAuthService };
