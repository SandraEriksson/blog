import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  @Input() blogId: number | undefined; // Input property to receive the blog ID from the parent component
  comment = ""; // Property to store the current comment being entered
  postComment: string[] = []; // Array to store posted comments
  date = new Date(); // Property to store the current date

  ngOnInit() {
    this.loadComments(); // Load comments when the component is initialized
  }

  loadComments() {
    // Retrieve stored blogs from local storage
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      const allBlogs: Blog[] = JSON.parse(storedBlogs);
      const selectedBlog = allBlogs.find((blog: Blog) => blog.id === this.blogId); // Find the blog with the matching ID
      // If the blog is found, update the component's postComment array with the blog's comments
      if (selectedBlog) {
        this.postComment = selectedBlog.comments || [];
      }
    }
  }

  submitComment() {
    const newComment: string = this.comment; // Store the new comment from the input field
    const storedBlogs = localStorage.getItem('blogs'); // Retrieve stored blogs from local storage
    let blogsData: Blog[] = storedBlogs ? JSON.parse(storedBlogs) : []; // Parse stored blogs from JSON or initialize an empty array if not present

    const selectedBlog = blogsData.find((blog: Blog) => blog.id === this.blogId); // Find the blog with the matching ID in the parsed blogs data


    if (selectedBlog) {
      selectedBlog.comments.push(newComment);
      localStorage.setItem('blogs', JSON.stringify(blogsData)); // Add the new comment to the blog's comments array
      this.postComment = selectedBlog.comments.map(comment => comment.toString());  // Update the component's postComment array with the updated comments
    }
    this.comment = "";// Clear the comment input field after submitting
  }
}
