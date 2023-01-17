import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonUiModule } from '@monorepos/common-ui';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    TestRoutingModule,
  ],
  providers: [TestService],
})
export class TestModule {}
