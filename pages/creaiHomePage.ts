import{Page,Locator} from '@playwright/test'

export class CreaiPage{
    
    private page:Page;
    creaiLogo:Locator;
    contactbutton:Locator;
    navheader:Locator;
    textheader:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.creaiLogo = this.page.getByRole('link',{name:'home'}).first().locator('img');
        this.contactbutton = page.locator('a[trigger="contact_cta"][location="navbar"]').filter({visible:true}).first();
        this.navheader = page.locator('.navbar11_component.w-nav').first();
        this.textheader = page.getByRole('heading',{name:'AI-powered solutions for human-centered operations'});
    }

    async navigatetosite(){
        return await this.page.goto('');
    }

    async closeCookieBanner(){
        const cookieBanner = this.page.getByText('This website uses cookies');
        await cookieBanner.waitFor({ state: 'visible' });
        await this.page.getByText('Allow All').click();
        await cookieBanner.waitFor({ state: 'hidden' });
    }

    async goToSuccessStories(){
        await this.page.locator('.navbar11_container').getByRole('link',{name:'Success stories'}).last().click();
    }
    
    getCard = (customerName:string):Locator => {
        return this.page.locator('.logo3_list.w-dyn-items').first().getByRole('img', { name: customerName })
    }
}