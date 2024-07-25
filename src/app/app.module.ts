import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { MongoComponent } from './mongo/mongo.component';
import { ExpressComponent } from './express/express.component';
import { NodeComponent } from './node/node.component';
import { GenaiComponent } from './genai/genai.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoComponent } from './video/video.component';
import { RestCallComponent } from './rest-call/rest-call.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AxiosApiComponent } from './axios-api/axios-api.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import axios from 'axios';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    RegisterComponent,
    GalleryComponent,
    ContactComponent,
    MeanComponent,
    MernComponent,
    MongoComponent,
    ExpressComponent,
    NodeComponent,
    GenaiComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    VideoComponent,
    RestCallComponent,
    AxiosApiComponent,
    FetchApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
