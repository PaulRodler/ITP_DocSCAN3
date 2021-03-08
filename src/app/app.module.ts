import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { RegistComponent } from './login/regist/regist.component';
import { PersonalDataComponent } from './profile/personal-data/personal-data.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { StoredDocumentsComponent } from './profile/stored-documents/stored-documents.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperComponent } from './swiper/swiper.component';
import { HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    IndexComponent,
    AppComponent,
    ForgotComponent,
    LoginComponent,
    RegistComponent,
    PersonalDataComponent,
    SettingsComponent,
    StoredDocumentsComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName:'csrfToken', headerName: 'X-CSRF-Token'}),
    HttpClientJsonpModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  , DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
