import HeaderComponent from '../components/common/header.component';
import SideMenuComponent from '../components/common/sidemenu.component';

export default class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }

    open() {
        return browser.url(this.url);
    }
}
