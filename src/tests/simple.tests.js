import { DashboardPage, DoctorsPage } from './../po/pages/index.js';

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach(async () => {
        await dashboardPage.open();
    });
    it('Check page title', async () => {
        await expect(browser).toHaveTitle(
            'Appointment Planner - Syncfusion Angular Components Showcase App'
        );
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
        await doctorsPage.addDoctorModal.input('name').setValue('John Doe');
        await doctorsPage.addDoctorModal.input('email').setValue('test@test.com');
        await doctorsPage.addDoctorModal.input('phone').setValue('1111111111');
        await doctorsPage.addDoctorModal.input('education').setValue('Basic');
        await doctorsPage.addDoctorModal.input('designation').setValue('Test');
        await doctorsPage.addDoctorModal.saveButton.click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
        await expect(doctorsPage.specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(doctorsPage.specialistCard(8).education).toHaveText('basic', {
            ignoreCase: true
        });
    });
    it('Close a modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        await doctorsPage.addDoctorModal.closeButton.click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    });
});
