import {expect,test} from '@playwright/test';

test.describe('Contact Page Tests', () => {
    
    test('Fill contact Form and verify success message', async ({ page }) => {
            const successMessage = 'Thanks for contacting us! We will be in touch with you shortly';
            //First we navigate to the home page
            await page.goto('https://practice.sdetunicorns.com');
            //Now we click on the contact link from ul
            const contactLink = page.locator('#menu-item-493 a');
            //now we click on the contact link
            await contactLink.click();
            //We verify that the URL contains the contact fragment
            await expect(page).toHaveURL(/.*contact/);
            //We fill the inputs one by one
            await page.locator('.contact-name input').fill('Carlos');
            await page.locator('.contact-email input').fill('carlos@gmail.com');
            await page.locator('.contact-phone input').fill('87615243');
            await page.locator('.contact-message textarea').fill('Hello from Playwright;)');
            //Now we click on the submit button
            await page.locator('button[type="submit"]').click();
            //Now finally we check the message is correct
            await expect(page.locator('div[role="alert"]')).toHaveText(successMessage);
        })
})
