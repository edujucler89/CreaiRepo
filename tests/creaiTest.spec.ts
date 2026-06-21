import { test, expect } from '@playwright/test';
import { CreaiPage } from '../pages/creaiHomePage';

test.beforeEach(async ({ page }) => {
    // throws an error if an error is displayed in console
    page.on('console',msg=>{
        if(msg.type()=='error'){
            throw new Error(msg.text());
        }
    });
});

test('Creai Technical Test', async ({ page },testinfo) => {
    const creaiHomePage = new CreaiPage(page);

    //runs in chrome browser and safari iphone12
    await test.step('Verify that pages loads successfully and close cookie banner',async()=>{
        const response = await creaiHomePage.navigatetosite();
        expect(response?.status()).toBe(200);
        //Close Cookie banner
        await creaiHomePage.closeCookieBanner();
    });

    //runs in chrome browser and safari iphone12
    await test.step('Verify key elments are displayed',async()=>{
        //Checking Creai Logo
        await expect(creaiHomePage.creaiLogo).toBeVisible();
        //Checking Contact Button
        await expect(creaiHomePage.contactbutton).toBeVisible();
        //Checking 3 sections:
        //1.Navigation header
        await expect(creaiHomePage.navheader).toBeVisible();
        //2.Customer logos or cards
        const customers = ['Novamex', 'Valenetwork', 'Inter', 'Nucleus Fintech', 'Vensure', 'Sura', 'Solvo'];
        for (const name of customers) {
            await expect(creaiHomePage.getCard(name)).toBeVisible();
        }
        //3.Text header
        await expect(creaiHomePage.textheader).toBeVisible();
    });

    //runs JUST in chrome browser
    if(testinfo.project.name !== 'Mobile Safari'){
        await test.step('Verify navigation to Success stories',async()=>{
            await creaiHomePage.goToSuccessStories();
            await expect(page).toHaveURL(/\/success-stories/);
        });
    }
});
