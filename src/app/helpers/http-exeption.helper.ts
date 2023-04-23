export class HttpExeption extends Error {
  public readonly statusCode: number;
  public readonly messages: string | string[];
  constructor(message: string | string[], statusCode: number) {
    super('');
    this.messages = message;
    this.statusCode = statusCode;
  }
}

export class BadRequestExeption extends HttpExeption {
  constructor(message: string | string[]) {
    super(message, 400);
  }
}

export class UnaltorizedExeption extends HttpExeption {
  constructor(message: string | string[]) {
    super(message, 401);
  }
}

export class NotFoundExeption extends HttpExeption {
  constructor(message: string | string[]) {
    super(message, 404);
  }
}
