import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and Verify Title', async ({ page }) => {
        //Open the URL 
        //We use the await in every single command since we ensure every action
        //is completed before moving to the next one
        await page.goto('https://practice.sdetunicorns.com/');
        //Verify the title
        //expect is an assertion library that allows us to verify in this case
        //that the title of the page is what we expect it to be
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })
    
})
