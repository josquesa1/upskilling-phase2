import { test } from "../../fixtures/fixtures";

test.describe(
  "Booking Page validations",
  { tag: ["@smoke", "@regression", "@booking"] },
  () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${process.env.BASEURL}`);
    });

    test("Booking Page layout", async ({
      bookingPage,
    }) => {
      await bookingPage.verifyBookingPageLayout();
    });

    test("Check availability element", async ({
      bookingPage,
    }) => {
      await bookingPage.verifyCheckAvailabilitySection();
    });
  },
);
