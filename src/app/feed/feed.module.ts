import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    FeedComponent,
    ProfileCardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
