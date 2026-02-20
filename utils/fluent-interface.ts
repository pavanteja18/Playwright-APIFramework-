export class RequestHandler {
  private baseUrl: string;
  private apiPath: string;
  private apiParams: string;
  private apiBody: string;
  private apiHeaders: string;

  url(url: string) {
    this.baseUrl = url;
    return this;
  }

  path(path: string) {
    this.apiPath = path;
    return this;
  }
}
