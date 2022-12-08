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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SolidCardComponent,
    ImageCardComponent,
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
