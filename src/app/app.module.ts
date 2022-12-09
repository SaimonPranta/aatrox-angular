import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { HomeComponent } from './Pages/Dashboard/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SolidCardComponent } from './Components/solid-card/solid-card.component';
import { ImageCardComponent } from './Components/image-card/image-card.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { FollowerGrowthComponent } from './Components/follower-growth/follower-growth.component';
import { FollowerGrowthDetailsComponent } from './Components/follower-growth-details/follower-growth-details.component';
import { ReachImpressionComponent } from './Components/reach-impression/reach-impression.component';
import { LikeHistoryComponent } from './Components/like-history/like-history.component';
import { CommentHistoryComponent } from './Components/comment-history/comment-history.component';
import { PostingHabitsComponent } from './Components/posting-habits/posting-habits.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SolidCardComponent,
    ImageCardComponent,
    FollowerGrowthComponent,
    FollowerGrowthDetailsComponent,
    ReachImpressionComponent,
    LikeHistoryComponent,
    CommentHistoryComponent,
    PostingHabitsComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
