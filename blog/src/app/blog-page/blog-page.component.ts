import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})

export class BlogPageComponent {
  blogs: Blog[] = []; // Array to store all blogs
  currentBlog: Blog | undefined; // Property to store the currently selected blog

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve blogs from local storage, parse them from JSON, or provide an empty array if not present
    this.blogs = JSON.parse(localStorage.getItem("blogs") || '[]');
    const id = Number(this.route.snapshot.paramMap.get('id')); // Extract the 'id' parameter from the route snapshot

      this.currentBlog = this.blogs.find(blog => blog.id === id); // Find the blog in the array with the matching 'id'
  }
}