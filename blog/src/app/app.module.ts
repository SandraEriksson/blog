import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CommentsComponent } from './comments/comments.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddBlogComponent,
    AboutMeComponent,
    BlogPageComponent,
    CommentsComponent,
    LikeDislikeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
