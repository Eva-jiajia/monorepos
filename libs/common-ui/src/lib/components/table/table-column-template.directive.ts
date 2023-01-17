import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ntTableColumnTemplate]'
})
export class NtTableColumnTemplateDirective {

    @Input() name!: string;

    constructor (public templateRef: TemplateRef<any>) {

    }

}