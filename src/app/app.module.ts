import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from './services/photo.service';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetInComponent } from './get-in/get-in.component';
import { UserService } from './services/user.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PhotoViewComponent,
    LoginComponent,
    SignupComponent,
    GetInComponent,
    NavBarComponent,
    MyGalleryComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PhotoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
