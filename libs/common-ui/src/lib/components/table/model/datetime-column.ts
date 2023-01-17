import { Column as Column } from './column';

export class DatetimeColumn extends Column {

    formatString: string = 'yyyy/MM/dd hh:mm';

    constructor (value?: Partial<DatetimeColumn>) {
        super();
        if (value) {
            Object.assign(this, value);
            this.type = 'datetime';
        }
    }

}