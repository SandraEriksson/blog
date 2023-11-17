import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "about-me",
    component: AboutMeComponent
  },{
    path: "add-blog",
    component: AddBlogComponent
  }, {
    path: "blog/:id",
    component: BlogPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
