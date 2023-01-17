import { Column } from './column';

export class StringColumn extends Column {

    constructor (value: Partial<StringColumn>) {
        super();
        if (value) {
            Object.assign(this, value);
        }
    }
}