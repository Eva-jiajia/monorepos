import { StringColumn, DatetimeColumn } from '@monorepos/common-ui';

export const TestColumns = [
  new StringColumn({
    field: 'no',
    display: 'No',
    canSort: true,
    style: { 'min-width': '110px', 'max-width': '110px' },
  }),
  new StringColumn({
    field: 'en-name',
    display: 'English Name',
    style: { 'min-width': '200px' },
  }),
  new StringColumn({
    field: 'zh-name',
    display: 'Chinese Name',
    style: { 'min-width': '200px' },
  }),
  new StringColumn({
    field: 'email',
    display: 'Email',
    style: { 'min-width': '200px' },
  }),
  new DatetimeColumn({
    field: 'date',
    display: 'Date',
    style: { 'min-width': '260px' },
  }),
];
