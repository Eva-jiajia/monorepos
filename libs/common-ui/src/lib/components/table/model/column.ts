import { TemplateRef } from '@angular/core';

export abstract class Column {

    field!: string;

    display!: string;

    type: 'text' | 'button' | 'enum' | 'datetime' = 'text';

    style: { [key: string]: any } = {};

    canSort: boolean = false;

    canFilter: boolean = false;

    templateName?: string;

    _template?: TemplateRef<any>;

    inSearch: boolean = false;

    alignFrozen: 'left' | 'right' = 'left';

    frozen: boolean = false;

    visible: boolean = true;

    [key: string]: any;

    constructor (value?: Partial<Column>) {
        if (value) {
            Object.assign(this, value);
        }
    }
}