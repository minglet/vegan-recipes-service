export class BadRequestError {
    status: number;
    message: any;
    constructor(message: any) {
      this.message = message;
      this.status = 400;
    }
  }
  