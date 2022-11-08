import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderMaskComponent } from './loader-mask/loader-mask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    LoaderMaskComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule
  ],
  exports: [ LoaderMaskComponent ]
})
export class SharedModule {
  
}
