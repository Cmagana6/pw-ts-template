import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    //We use async/await to ensure that the test waits for each action to complete
    //before moving to the next one
    //This is important for actions that involve network requests or page navigation
    //Every test receives a `page` object that represents the browser page
    //on which the test will run
    test('Open HomePage and Verify Title', async ({ page }) => {
        //Open the URL 
        //We use the await in every single command since we ensure every action
        //is completed before moving to the next one
        //but the main reason is that Playwright commands return a Promise
        //and we need to wait for that Promise to resolve
        await page.goto('https://practice.sdetunicorns.com/');
        //Verify the title
        //expect is an assertion library that allows us to verify in this case
        //that the title of the page is what we expect it to be
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })

    test('Open About Page and Verify Title', async ({ page }) => {
        //We navigate to the home page
        await page.goto('https://practice.sdetunicorns.com/');
        //We locate the "About" link in the navigation bar
        const aboutLink = await page.locator('//li[@id="menu-item-491"]/a');
        //We verify that the "About" link is visible
        await expect(aboutLink).toBeVisible();
        //We click on the "About" link to navigate to the About page
        await aboutLink.click();
        //We verify that the title of the About page is as expected
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })
})
