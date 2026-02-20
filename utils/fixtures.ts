import { test as base } from "@playwright/test";
import { RequestHandler } from "./fluent-interface";

export type fixture = {
  api: RequestHandler;
};

export const test = base.extend<fixture>({
  api: async ({}, use) => {
    const reqHandler = new RequestHandler();
    await use(reqHandler);
  },
});
