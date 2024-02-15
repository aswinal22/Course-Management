import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  showCourses: boolean = false;
  courses: any[] = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn the basics of Angular framework',
      price: '$49.99',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Advanced Angular Techniques',
      description: 'Master advanced concepts in Angular',
      price: '$99.99',
      image: 'https://via.placeholder.com/300'
    },
    // Add more sample course data as needed
  ];

  constructor() { }
  ngOnInit() {
    this.showCourses = false; // Initially show courses
  }
}
