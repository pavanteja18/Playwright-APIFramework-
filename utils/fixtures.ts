import { test as base } from "@playwright/test";
import { RequestHandler } from "./fluent-interface";

export type fixture = {
  api: RequestHandler;
};

export const test = base.extend<fixture>({
  api: async ({ request }, use) => {
    const reqHandler = new RequestHandler(request);
    await use(reqHandler);
  },
});
