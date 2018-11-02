import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { MyValue } from './my-value';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FirstComponent,
  ],
  providers: [
    {
      provide: MyValue,
      useValue: {
        value: 'A',
      },
    }
  ],
})
export class AModule { }
