import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Blog } from '../blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  // Array of image paths for blog thumbnails
  imagePath: string[] = [
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
    '/assets/images/7.jpg',
    '/assets/images/8.jpg',
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]'); // Retrieve blogs from local storage, parse them from JSON, or provide an empty array if not present
    this.blogs.forEach(blog => {

      // Check if the blog has no thumbnailUrl property
      if (!blog.thumbnailUrl) {
        const randomIndex = this.getRandomIndex(); // If no thumbnailUrl, generate a random index and assign a corresponding image path to the blog
        blog.thumbnailUrl = this.imagePath[randomIndex];
      }
    });
    // Update the blogs array in local storage with the modified blog objects
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.imagePath.length);
  }
}