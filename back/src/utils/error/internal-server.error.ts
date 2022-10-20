//서버 에러
export class InternalServerError {
    status: number;
    message: any;
    constructor(message: any) {
      this.message = message;
      this.status = 500;
    }
  }
  