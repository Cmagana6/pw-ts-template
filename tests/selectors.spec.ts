import {test,expect} from '@playwright/test';

//This is a test suite to refresh the knowledge of selectors
//Selectors are used to locate elements on the page
test.describe('Selectors practice', () => {
    //We are going to start with the CSS selectors
    //CSS selectors are used to select elements based on their CSS properties
    //it can be class, id, tag name, attributes, etc.
    test('CSS Selectors', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        //Now we are goint to locate the "Get Started" button using a CSS selector
        //We will use the id
        const getStartedButton = await page.locator('#get-started');
        //We verify that the "Get Started" button is visible
        await expect(getStartedButton).toBeVisible();
        //Now we are able to click on the "Get Started" button
        //And as we said before we not always need to use await
        //but in this case we do because we want to ensure that the click action
        await getStartedButton.click();
        //Now we verify that the URL contains the #get-started fragment
        await expect(page).toHaveURL(/.*#get-started/);
    })
    
})
