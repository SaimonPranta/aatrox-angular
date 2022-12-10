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
import { ItemOneComponent } from './Components/SubSidNav/item-one/item-one.component';
import { ItemTowComponent } from './Components/SubSidNav/item-tow/item-tow.component';
import { ItemThreeComponent } from './Components/SubSidNav/item-three/item-three.component';
import { ItemFourComponent } from './Components/SubSidNav/item-four/item-four.component';
import { ItemFiveComponent } from './Components/SubSidNav/item-five/item-five.component';
import { ItemSixComponent } from './Components/SubSidNav/item-six/item-six.component';
import { ItemSevenComponent } from './Components/SubSidNav/item-seven/item-seven.component';
import { MegaMenuComponent } from './Modals/mega-menu/mega-menu.component';

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
    ItemOneComponent,
    ItemTowComponent,
    ItemThreeComponent,
    ItemFourComponent,
    ItemFiveComponent,
    ItemSixComponent,
    ItemSevenComponent,
    MegaMenuComponent,
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
