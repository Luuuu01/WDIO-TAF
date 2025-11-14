import SideMenuComponent from './../components/common/sidemenu.component.js';
import BasePage from './base.page.js';

export default class DashboardPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard');
        this.sideMenu = new SideMenuComponent();
    }
}
