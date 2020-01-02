import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { DevelopmentComponent } from './development/development.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { Feature2SideMenuComponent } from './feature2-side-menu/feature2-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    HomeComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent,
    DevelopmentComponent,
    Feature2Component,
    Feature2CardsComponent,
    Feature2SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
