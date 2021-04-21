export default class Validator {
    constructor(name) {
        this.name = name;
    }


    validateUsername() {
        const first = /[\w-]/.test(this.name);
        const second = /^[\d_-]|[\d_-]$/.test(this.name);
        const third = /\d{4}/.test(this.name);
        return first && !second && !third;
    }

}