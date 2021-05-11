import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { StepsComponent } from './client/steps/steps.component';
import { LatestItemsComponent } from './client/latest-items/latest-items.component';
import { ButtonComponent } from './client/button/button.component';
import { AreaComponent } from './client/area/area.component';
import { TestimonialComponent } from './client/testimonial/testimonial.component';
import { CallToActionComponent } from './client/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    StepsComponent,
    LatestItemsComponent,
    ButtonComponent,
    AreaComponent,
    TestimonialComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
