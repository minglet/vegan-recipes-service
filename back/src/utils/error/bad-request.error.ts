// 사용자가 잘못 입력한 경우
export class BadRequestError {
    status: number;
    message: any;
    constructor(message: any) {
      this.message = message;
      this.status = 400;
    }
  }
  