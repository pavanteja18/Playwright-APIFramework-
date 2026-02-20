import { APIRequestContext } from "@playwright/test";

export class RequestHandler {
  private baseUrl: string = "";
  private apiPath: string = "";
  private apiParams: object = {};
  private apiHeaders: object = {};
  private apiBody: object = {};

  constructor() {}

  url(url: string) {
    this.baseUrl = url;
    return this;
  }

  path(path: string) {
    this.apiPath = path;
    return this;
  }

  params(params: object) {
    this.apiParams = params;
    return this;
  }

  header(headers: object) {
    this.apiHeaders = headers;
    return this;
  }

  body(body: object) {
    this.apiBody = body;
    return this;
  }
}
