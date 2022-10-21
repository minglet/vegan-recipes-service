//요청받은 리소스를 찾을 수 없을 때 에러
export class NotFoundError {
    status: number;
    message: any;
    constructor(message: any) {
      this.message = message;
      this.status = 404;
    }
  }
  