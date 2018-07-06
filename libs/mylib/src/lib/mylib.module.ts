import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibTestComponent } from './lib-test/lib-test.component';
@NgModule({
  imports: [CommonModule],
  declarations: [LibTestComponent],
  exports: [LibTestComponent]
})
export class MylibModule {}
