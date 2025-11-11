import SideMenuComponent from './../components/common/sidemenu.component.js';

export default class DashboardPage {

    constructor() {
        this.sideMenu = new SideMenuComponent();
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    }
}
