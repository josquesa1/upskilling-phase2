import { expect, request, test } from "@playwright/test";

test.describe(
  "Booking app api tests",
  { tag: ["@util"] },
  () => {
    test(`Get avalable rooms`, async () => {
        // define api variables
        const apiEndpoint = "https://automationintesting.online/api/room?";
        const apiPayload = "checkin=2025-08-08&checkout=2025-08-15";
        const apiHeaders = {};

        // create api context
        const apiContext = await request.newContext();

        // make api request
        const apiResponse = await apiContext.get(apiEndpoint, {
          data: {
            query: apiPayload,
          },
          headers: apiHeaders,
        });
        await expect(apiResponse.ok()).toBeTruthy();
        console.log(await apiResponse.json());
    });
  },
);