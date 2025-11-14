import BaseComponent from '../common/base.component.js';

export default class SpecialistCardComponent extends BaseComponent {
    /**
     * @param {number} id - Specialist ID (e.g., 8 for Specialist_8)
     */
    constructor(id) {
        super(`#Specialist_${id}`);
    }

    get name() {
        return this.rootEl.$('.name');
    }

    get education() {
        return this.rootEl.$('.education');
    }
}
