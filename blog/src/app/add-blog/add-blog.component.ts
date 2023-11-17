import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { ActivatedRoute, Route } from '@angular/router';



@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent {

  blogs: Blog[] = [];   // Array to store blogs
  // Properties to store blog details
  title: string = '';
  content: string = '';
  imagePath: string[] = [ // Array of image paths for blog thumbnails
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
    // Retrieve blogs from local storage, parse them from JSON, or provide an empty array if not present
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      this.blogs = JSON.parse(storedBlogs);
    }
  }

  // Method to add a new blog
  addBlog(title: string, content: string) {
    // Initialize variables for blog ID and retrieve the stored ID from local storage
    let id = 0;
    let storedId = localStorage.getItem('id');
    if (storedId) {
      id = parseInt(storedId);
    }

    // Create a new blog object with the provided details
    const blog = {
      id: id,
      thumbnailUrl: '',
      title,
      content,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };

    // Generate a random index for the thumbnail URL and assign it to the blog
    const randomIndex = this.getRandomIndex();
    blog.thumbnailUrl = this.imagePath[randomIndex];

    // Increment the ID and update it in local storage
    id++;
    localStorage.setItem('id', id.toString());

    // Ensure that the 'blogs' property is an array
    if (!Array.isArray(this.blogs)) {
      this.blogs = [];
    }
    this.blogs = [blog, ...this.blogs]; // Add the new blog to the beginning of the 'blogs' array
    localStorage.setItem("blogs", JSON.stringify(this.blogs)); // Update local storage with the modified 'blogs' array

    // Clear the title and content properties after adding the blog
    this.title = '';
    this.content = '';
  }
  // Method to generate a random index based on the length of the imagePath array
  getRandomIndex() {
    return Math.floor(Math.random() * this.imagePath.length);
  }
}