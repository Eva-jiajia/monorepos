import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NtInputComponent } from './components/input/input.component';
import { NtTableComponent } from './components/table/table.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

const PRIMENG_MODULES = [ButtonModule, TableModule, InputTextModule];

const COMPONENTS = [NtInputComponent, NtTableComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ...PRIMENG_MODULES,
  ],
  declarations: [...COMPONENTS],
  exports: [CommonModule, TranslateModule, ...COMPONENTS],
})
export class CommonUiModule {}
