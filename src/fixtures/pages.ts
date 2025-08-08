import { test as base } from "@playwright/test";
import { BookingPage } from "@pages/bookingPage";

type PageFixtures = {
  bookingPage: BookingPage;
};

export const test = base.extend<PageFixtures>({
  bookingPage: async ({ page }, use) => {
    await use(new BookingPage(page));
  },
});
