import { SortEvent } from 'primeng/api';

export class TableConfig {

    /** Number of rows to display per page.*/
    rows: number = 10;

    /** When specified as true, enables the pagination. */
    paginator: boolean = false;

    /** An array of fields as string to use in global filtering. */
    globalFilterFields: Array<string> = [];

    /** Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work. */
    rowHover: boolean = false;

    /** A property to uniquely identify a record in data. */
    dataKey!: string;

    /** Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} */
    currentPageReportTemplate: string = 'Showing {first} to {last} of {totalRecords} entries';

    /** Whether to display current page report. */
    showCurrentPageReport: boolean = true;

    /** Unique identifier of a stateful table to use in state storage. */
    stateKey!: string;

    /** Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage. */
    stateStorage: 'session' | 'local' = 'session';

    emptymessage: string = 'No customers found.';

    /** When specifies, enables horizontal and/or vertical scrolling. */
    scrollable: boolean = false;

    scrollDirection: 'vertical' | 'horizontal' | 'both' = 'vertical'

    scrollHeight: string = 'flex';

    styleClass: string = '';

    reorderableColumns: boolean = false

    tableClass: (rowData: any) => string[] = (rowData: any) => [];

    sortMode: 'single' | 'multiple' = 'single';

    sortField: string = '';

    sortOrder: number = 1;

    sortFunction: (event: SortEvent) => void = (event: SortEvent) => { }

    customSort: boolean = false;

    showHeader: boolean = true;

    expanded: boolean = false;

    expandedRowKeys: { [s: string]: boolean } = {};

    constructor (value: Partial<TableConfig>) {
        Object.assign(this, value);
    }
}