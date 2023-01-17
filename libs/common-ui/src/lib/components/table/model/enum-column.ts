import { Column } from './column';
import { EnumOptions } from './enum-options';

export class EnumColumn extends Column {

    enumOptions?: EnumOptions;

    constructor (value?: Partial<EnumColumn>) {
        super();
        if (value) {
            Object.assign(this, value);
            this.type = 'enum'
        }
    }
}