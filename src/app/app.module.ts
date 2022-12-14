import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterExtService } from './services/router-ext.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private routerExtService: RouterExtService){

  }

}
