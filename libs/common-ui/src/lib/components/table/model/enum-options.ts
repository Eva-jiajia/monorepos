export class EnumOptions {

    text?: string = 'text';

    value?: string = 'value';

    options!: Array<any>;

    constructor (value: EnumOptions) {
        Object.assign(this, value);
    }
}