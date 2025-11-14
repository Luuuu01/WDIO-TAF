import ListHeaderComponent from './../components/doctors/list-header.component.js'
import AddDoctorComponent from './../components/doctors/add-doctor.component.js'
import BasePage from './base.page.js';

export default class DoctorsPage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors');
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }
    }
