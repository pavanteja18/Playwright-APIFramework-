import { APIRequestContext } from "@playwright/test";

export class RequestHandler {
  private baseUrl: string = "";
  private apiPath: string = "";
  private apiParams: object = {};
  private apiHeaders: object = {};
  private apiBody: object = {};
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

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
    console.log(this.apiParams);
    return this;
  }

  header(headers: object) {
    this.apiHeaders = headers;
    console.log(this.apiHeaders);
    return this;
  }

  body(body: object) {
    this.apiBody = body;
    return this;
  }
}
