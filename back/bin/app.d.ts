import { MiddleWare } from "./middleware";
export declare class App {
    private readonly app;
    private readonly router;
    constructor(app?: import("express-serve-static-core").Express, router?: MiddleWare);
    getApp(): import("express-serve-static-core").Express;
    setMiddlewares(): MiddleWare;
}
