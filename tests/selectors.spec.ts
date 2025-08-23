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

    //Practicing with Text selectors
    test('Verify Heading Text usin Text Selector', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        //We locate the heading using a text selector
        //Note when using text it must be unique on the page to be accurate
        const heading = await page.locator('text="Think different. Make different."');
        //We verify that the heading is visible
        await expect(heading).toBeVisible();
        //We verify that the heading contains the correct text
        await expect(heading).toHaveText('Think different. Make different.');
    })
    
    test('Verify Home Link is enabled using text and CSS Selector', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        //Find the home button using a combination of text and CSS selector
        // //This is useful when the text is not unique on the page
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        //another way to combine text and CSS selector is using the :has-text() pseudo-class
        const homeText = await page.locator('#zak-primary-menu:has-text("Home")');
        //We verify that the home button is enabled
        await expect(homeText).toBeEnabled();
    })
    
})
