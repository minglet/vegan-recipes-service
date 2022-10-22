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
