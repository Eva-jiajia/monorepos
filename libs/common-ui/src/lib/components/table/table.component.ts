import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { Column } from './model/column';
import { TableConfig } from './model/table-config';
import { NtTableColumnTemplateDirective } from './table-column-template.directive';

@Component({
  selector: 'nt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class NtTableComponent implements OnInit, AfterContentInit {
  _columns: Array<Column> = [];
  _columnsInitSub$ = new Subject<Array<any>>();
  _afterContentInitSub$ = new Subject<boolean>();

  @Input() tableConfig!: TableConfig;
  @Input() selectedProducts: Array<any> = [];
  @Input() loading: boolean = false;
  @Input() data: Array<{ [name: string]: string } | any> = [];
  @Input()
  set columns(value: Array<Column>) {
    if (value) {
      this._columnsInitSub$.next(value);
      this._columnsInitSub$.complete();
    }
  }
  get columns() {
    return this._columns;
  }

  @Output() selectedProductsChange: Array<any> = [];

  @ContentChild('caption') caption?: TemplateRef<any>;
  @ContentChild('footer') footer?: TemplateRef<any>;
  @ContentChild('summary') summary?: TemplateRef<any>;
  @ContentChild('expansion') expansion?: TemplateRef<any>;
  @ContentChildren(NtTableColumnTemplateDirective)
  columnTemplate?: QueryList<NtTableColumnTemplateDirective>;

  constructor() {
    forkJoin([this._columnsInitSub$, this._afterContentInitSub$]).subscribe(
      (res) => {
        if (res[0] && res[1]) {
          this.init(res[0]);
        }
      }
    );
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this._afterContentInitSub$.next(true);
    this._afterContentInitSub$.complete();
  }

  init(value: Array<Column>): void {
    this._columns = value.map((v) => {
      const template = this.columnTemplate?.find(
        (c) => c.name === v.templateName
      );
      if (v.templateName && template) {
        v._template = template.templateRef;
      }
      return v;
    });
  }
}
