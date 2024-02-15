import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'assignments', component: AssignmentsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }