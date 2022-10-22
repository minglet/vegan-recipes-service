export class IntervalServerError {
    status: 500;
    message: any;
    constructor(message: any) {
      this.message = message;
    }
  }
  