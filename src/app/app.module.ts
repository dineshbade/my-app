import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.modules';
import { ApiService } from './common/service/api.service';
import { JwtService } from './common/service/jwt.service'
import {AuthGuard } from './common/service/auth.guard';

import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
 PageModule,
   HttpModule,
  FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ApiService,JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
