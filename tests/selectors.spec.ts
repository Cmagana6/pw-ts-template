import {test,expect} from '@playwright/test';

//This is a test suite to refresh the knowledge of selectors
//Selectors are used to locate elements on the page
test.describe('Selectors practice', () => {
    //We will define a beforeEach hook to navigate to the practice page before each test
    //This will ensure that each test starts from the same state
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
    })
    //We are going to start with the CSS selectors
    //CSS selectors are used to select elements based on their CSS properties
    //it can be class, id, tag name, attributes, etc.
    test('CSS Selectors', async ({ page }) => {
        //We are goint to locate the "Get Started" button using a CSS selector
        //We will use the id
        const getStartedButton = page.locator('#get-started');
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
        //We locate the heading using a text selector
        //Note when using text it must be unique on the page to be accurate
        const heading = page.locator('text="Think different. Make different."');
        //We verify that the heading is visible
        await expect(heading).toBeVisible();
        //We verify that the heading contains the correct text
        await expect(heading).toHaveText('Think different. Make different.');
    })
    
    test('Verify Home Link is enabled using text and CSS Selector', async ({ page }) => {
        //Find the home button using a combination of text and CSS selector
        // //This is useful when the text is not unique on the page
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        //another way to combine text and CSS selector is using the :has-text() pseudo-class
        const homeText = page.locator('#zak-primary-menu:has-text("Home")');
        //We verify that the home button is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Verify Search icon is visible using Xpath Selector', async ({ page }) => {
        //We locate the search icon using an XPath selector
        const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');

        //Verify Search icon is visible
        await expect(searchIcon).toBeVisible();
    })
    
    test('Handling Multiple Elements', async ({ page }) => {
        //First we locate the elements we want to address
        //in this case are the elements from the nav menu
        //We use locator to get all the li elements that have an id that contains "menu"
        //instead of $$ which is not recommended in Playwright
        const navMenuLinks = page.locator('#zak-primary-menu li[id*="menu"]');
        //we can just compare only a desired element as well using nth()
        //For example we can verify that the 3rd element contains the text "Shop"
        const thirdElement = page.locator('#zak-primary-menu li[id*="menu"]').nth(2);
        //Now we are going to verify the text of each element
        //We define an array with the expected texts
        const expectedTexts = ['Home','About','Shop','Blog','Contact','My account'];
        //We use the allTextContents() method to get the text of all the elements
        //It automatically returns an array of texts
        //And we compare it with the expected texts
        expect(await navMenuLinks.allTextContents()).toEqual(expectedTexts);
        //now we verify that the third element contains the text "Shop"
        expect(await thirdElement.textContent()).toEqual(expectedTexts[2]);
        //Now lets print all the link texts to the console
        for(const el of await navMenuLinks.elementHandles())
            //Accessing the textContent property returns a promise so we need to await it
            console.log(await el.textContent());
        })
})
