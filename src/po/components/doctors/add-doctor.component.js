import BaseComponent from '../common/base.component.js';

export default class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog');
    }

    /**
     * Get input field by name
     * @param {'name' | 'phone' | 'email' | 'education' | 'designation'} inputName
     * @returns {ChainablePromiseElement}
     */
    input(inputName) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        };
        return this.rootEl.$(selectors[inputName.toLowerCase()]);
    }

    get saveButton() {
        return this.rootEl.$('//*[.="Save"]');
    }

    get closeButton() {
        return this.rootEl.$('.e-dlg-closeicon-btn');
    }
}
