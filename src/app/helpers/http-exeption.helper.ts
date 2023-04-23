export class HttpExeption extends Error {
  public readonly statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestExeption extends HttpExeption {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnaltorizedExeption extends HttpExeption {
  constructor(message: string) {
    super(message, 401);
  }
}

export class NotFoundExeption extends HttpExeption {
  constructor(message: string) {
    super(message, 404);
  }
}
