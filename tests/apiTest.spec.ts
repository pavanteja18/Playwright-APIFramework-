import { test } from "../utils/fixtures";

test("Initializing the API Test...", async ({ api }) => {
  api
    .url("https://conduit-api.bondaracademy.com/api")
    .params({ limit: 4, offset: 3 })
    .path("/articles")
    .header({ Authorization: "api-token" });
});
