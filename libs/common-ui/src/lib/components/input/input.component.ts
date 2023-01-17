import {
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  InputIcon,
  InputIconEnum,
  InputSize,
  InputSizeEnum,
  InputType,
  InputTypeEnum,
} from './input.type';

@Component({
  selector: 'nt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NtInputComponent),
      multi: true,
    },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(change)': '_onChange($event.target.value)',
    '(blur)': '_onTouched()',
    class: 'p-element',
  },
})
export class NtInputComponent implements ControlValueAccessor {
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'default';
  @Input() fieldName!: string;
  @Input() icon?: InputIcon;
  @Input() isInvaild = false;
  @Input() extraTip?: string;
  @Input() invalidTip?: string;
  @Input() maskValue?: string;
  @Input() placeholder = '';
  @Input() format?: (val: string) => string;

  @ContentChild('PrefixIconTpl') PrefixIconTpl?: TemplateRef<void>;
  @ContentChild('SuffixIconTpl') SuffixIconTpl?: TemplateRef<void>;

  TYPEENUM = InputTypeEnum;
  SIZEENUM = InputSizeEnum;
  ICONENUM = InputIconEnum;

  value!: string;
  disabled = false;

  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef<HTMLInputElement>;

  _onChange: (fn: any) => void = (fn: any) => null;
  _onTouched: () => void = () => null;

  constructor() {}

  writeValue(val: string): void {
    this.value = val;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  onChange(event: any) {
    if (this.format) {
      this.value = this.format(event);
      this.inputElement.nativeElement.value = this.value;
    }
    this._onChange(this.value);
  }
}
