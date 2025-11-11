import DashboardPage from './../po/pages/dashboard.page.js';
import DoctorsPage from './../po/pages/doctors.page.js';

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach(async () => {
        await dashboardPage.open();
    });
    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });
    it('Open modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
    });
    it('Add a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        await $('[name="Name"]').setValue('John Doe');
        await $('[name="Email"]').setValue('test@test.com');
        await $('#DoctorMobile').setValue('1111111111');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');
        await $('//*[.="Save"]').click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('basic', {ignoreCase: true});
    });
    it('Close a modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    });
})
