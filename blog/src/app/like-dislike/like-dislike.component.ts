import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})

export class LikeDislikeComponent implements OnInit {

  @Input() blogId: number | undefined; // Input property to receive the blog ID from the parent component

  // Properties to track the number of likes and dislikes, initialized as 0 by default
  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  ngOnInit() {
    this.loadLikesAndDislikes();  // Load the initial number of likes and dislikes when the component is initialized
  }
  // Method to handle the like button click
  likeButtonClick() {
    this.numberOfLikes++;
    this.updateLocalStorage();
  }
  // Method to handle the dislike button click
  dislikeButtonClick() {
    this.numberOfDislikes++;
    this.updateLocalStorage();
  }
  // Private method to load the initial number of likes and dislikes from local storage
  private loadLikesAndDislikes() {
    const storedBlogs = localStorage.getItem('blogs');
    // Check if there are stored blogs and if the blogId is defined
    if (storedBlogs && this.blogId !== undefined) {
      const blogs = JSON.parse(storedBlogs);
      const blog = blogs.find((blog: any) => blog.id === this.blogId);    // Find the blog with the matching ID
      // If the blog is found, update the component's like and dislike counts
      if (blog) {
        this.numberOfLikes = blog.likes;
        this.numberOfDislikes = blog.dislikes;
      }
    }
  }
  // Private method to update the local storage with the current like and dislike counts
  private updateLocalStorage() {
    const storedBlogs = localStorage.getItem('blogs');   // Retrieve the stored blogs from local storage

    if (storedBlogs && this.blogId !== undefined) {
      const blogs = JSON.parse(storedBlogs);
      const blogIndex = blogs.findIndex((blog: any) => blog.id === this.blogId); // Find the index of the blog with the matching ID
      // If the blog is found, update its like and dislike counts
      if (blogIndex !== -1) {
        blogs[blogIndex].likes = this.numberOfLikes;
        blogs[blogIndex].dislikes = this.numberOfDislikes;
        // Update local storage with the modified blogs array
        localStorage.setItem('blogs', JSON.stringify(blogs));
      }
    }
  }
}