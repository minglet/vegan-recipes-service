declare const _default: (err: any, req: any, res: any, next: any) => any;
export default _default;
declare function errorMiddleware(error: any, req: any, res: any, next: any): void;
declare const ifErrorMessage: (target: any) => void;
export { errorMiddleware, ifErrorMessage };
