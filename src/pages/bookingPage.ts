import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./common/base";

export class BookingPage extends BasePage {
 readonly Texts: any;
 readonly heroSection: Locator;
 readonly checkAvailability: Locator;
 readonly roomsAvailable: Locator;
 readonly locationsSection: Locator;
 readonly contactSection: Locator;
 // Check Availaibity
 readonly checkInInput: Locator;
 readonly checkOutInput: Locator;
 readonly checkAvailabilityButton: Locator;


 constructor(page: Page) {
   super(page);
   // Layout
     this.heroSection = page.locator(".hero");
     this.checkAvailability = page.locator("#booking");
     this.roomsAvailable = page.locator("#rooms");
     this.locationsSection = page.locator("#location");
     this.contactSection = page.locator("#contact");
    // Check Availability
     this.checkInInput = this.checkAvailability.getByRole('textbox').first();
     this.checkOutInput = this.checkAvailability.getByRole('textbox').last();
     this.checkAvailabilityButton = this.checkAvailability.getByRole("button");

    this.Texts = {
    };
  }

//** Page Actions **/



//** Validations **/

  async verifyBookingPageLayout() {
    await expect(this.heroSection).toBeVisible()
    await expect(this.heroSection).toBeInViewport()
    await expect(this.checkAvailability).toBeVisible()
    await expect(this.checkAvailability).toBeInViewport()
    await expect(this.roomsAvailable).toBeVisible()
    await expect(this.locationsSection).toBeVisible()
    await expect(this.contactSection).toBeVisible()
  }

  async verifyCheckAvailabilitySection() {
    await expect(this.checkInInput).toBeVisible()
    await expect(this.checkOutInput).toBeVisible()
    await expect(this.checkAvailabilityButton).toBeVisible()
    await expect(this.checkAvailabilityButton).toContainText("Check Availability")
  }

   //* * Visual Validations */

   async visualValidationForBookingPage() {
    // await expect(this.zipGatePage).toHaveScreenshot();
  }

  // async visualValidationForModelSelection() {
  //   await expect(this.listingHeader).toHaveScreenshot();
  //   await expect(this.categorySelector).toHaveScreenshot();
  //   const modelList = await this.getAllModelsInList();
  //   for (let iter = 0; iter < modelList.length; iter++) {
  //     // modelList = await this.getAllModelsInList();
  //     const model = await modelList[iter];
  //     console.log(
  //       `Validating model card: ${await model.getByTestId("model-tile-name").innerText()}`,
  //     );
  //     await model
  //       .filter({ has: this.modelName })
  //       .scrollIntoViewIfNeeded();
  //     await this.explicitWait(250); // Wait for elements to be stable
  //     await expect(model).toHaveScreenshot();
  //   }
  // }
}
