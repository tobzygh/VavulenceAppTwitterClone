import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './members/home-page/home-page.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeEachTweetComponent } from './members/home-each-tweet/home-each-tweet.component';
import { SharedModule } from './_modules/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    HomeEachTweetComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
