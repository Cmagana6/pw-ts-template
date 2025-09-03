import {test,expect} from '@playwright/test';

test.describe('Blog Page Tests', () => {
    
        test('Verify recent post count and verify length of each list item', async ({ page }) => {
             //First we navigate to the home page
            await page.goto('https://practice.sdetunicorns.com');
            //get the blog link
            const blogLink = page.locator('#menu-item-490 a');
            //now we click on the blog link
            await blogLink.click();
            //We verify that we are in the right url
            await expect(page).toHaveURL(/.*blog/);
            //We are going to await for the recent posts section to be visible
            await expect(page.locator('#recent-posts-3')).toBeVisible();
            //Now we are going to locate the recent posts section
            const recentPostsList = page.locator('#recent-posts-3 ul li');
            //We assert the total lenght that must be equal to 5
            expect(await recentPostsList.count()).toEqual(5);
            //Loop through each item on the post section and assert char lenght > 10
            for( const el of await recentPostsList.elementHandles()){
                expect((await el.textContent())?.trim().length).toBeGreaterThan(10);
                 console.log(`The length of ${(await el.textContent())?.trim()} is ${(await el.textContent())?.trim().length}`)
            }
        })
        
})
