import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModuleModule } from './module/material-module/material-module.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './module/shared/shared.module';
import { NavigitionBarComponent } from './module/shared/components/navigition-bar/navigition-bar.component';
import { FooterComponent } from './module/shared/components/footer/footer.component';
import { ImageCarouselComponent } from './module/shared/components/image-carousel/image-carousel.component';
import { PageNotFoundComponent } from './module/shared/components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AfterRegisterComponent } from './components/after-register/after-register.component';
import { BeforeRegisterComponent } from './components/before-register/before-register.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent,
    NavigitionBarComponent,
    FooterComponent,
    ImageCarouselComponent,
    PageNotFoundComponent,
    AfterRegisterComponent,
    BeforeRegisterComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
