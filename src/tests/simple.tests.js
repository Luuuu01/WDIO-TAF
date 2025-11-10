describe('Doctors page', () => {
    beforeEach(async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    });
    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });
    it('Open modal window for adding a new doctor', async () => {
        // click on doctors item in the side menu
        // click on add new doctor btn
        // check the modal window is display
        await $('.doctors').click();
        await $('//*[contains(text(), "Add New Doctor")]').click();
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    });
    it('Add a new doctor', async () => {
        await $('.doctors').click();
        await $('//*[contains(text(), "Add New Doctor")]').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('[name="Name"]').setValue('John Doe');
        await $('[name="Email"]').setValue('test@test.com');
        await $('#DoctorMobile').setValue('1111111111');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');
        await $('//*[.="Save"]').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('basic', {ignoreCase: true});
    });
    it('Close a modal window for adding a new doctor', async () => {
        await $('.doctors').click();
        await $('//*[contains(text(), "Add New Doctor")]').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    });
})
