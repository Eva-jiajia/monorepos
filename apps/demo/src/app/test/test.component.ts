import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableConfig } from '@monorepos/common-ui';
import { TestColumns } from './models/test.model';
import { TestService } from './services/test.service';

@Component({
  selector: 'test',
  template: `
    <div class="wrapper">
      <nt-table [tableConfig]="tableConfig" [columns]="columns" [data]="data">
        <ng-template #caption>
          <div>
            <nt-input
              [icon]="'suffix'"
              [(ngModel)]="value"
              [placeholder]="'Search'"
              style="width: 250px;"
              (ngModelChange)="onSearch()"
            >
            </nt-input>
          </div>
        </ng-template>
      </nt-table>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements OnInit {
  value: string = '';
  tableConfig!: TableConfig;
  columns = TestColumns;
  data: Array<any> = [];

  constructor(private testSvc: TestService) {}

  ngOnInit(): void {
    this._initTableConfig();
    this._loadData();
  }

  _initTableConfig(): void {
    this.tableConfig = new TableConfig({
      dataKey: 'id',
      paginator: false,
      scrollable: true,
      scrollDirection: 'vertical',
      styleClass: 'p-datatable-sm',
    });
  }

  _loadData(): void {
    this.testSvc.getTestData().subscribe((res) => {
      this.data = res;
    });
  }

  onSearch(): void {
    this._loadData();
  }
}
