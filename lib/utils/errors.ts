import { ERROR_MESSAGE } from "lib/constants";

interface ErrorOptions {
  cause: string;
  statusCode: number;
}

export class APIClientError extends Error {
  readonly statusCode: number;

  constructor(message?: string, options?: Partial<ErrorOptions>) {
    super(message ?? ERROR_MESSAGE.client, {
      cause: options?.cause ?? message ?? ERROR_MESSAGE.client
    });

    this.statusCode = options?.statusCode ?? 400;
  }
}

export class APIServerError extends Error {
  readonly statusCode: number;

  constructor(message?: string, options?: Partial<ErrorOptions>) {
    super(message ?? ERROR_MESSAGE.server, {
      cause: options?.cause ?? message ?? ERROR_MESSAGE.server
    });

    this.statusCode = options?.statusCode ?? 500;
  }

  public showDefaultMessage() {
    super.message = ERROR_MESSAGE.server;
  }
}
