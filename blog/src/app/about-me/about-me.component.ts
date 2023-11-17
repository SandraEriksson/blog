import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // Properties to store email and message data
  email: string = '';
  message: string = '';


  // Method to handle form submission
  onSubmit() {
    // Check if email or message is not provided
    if (!this.email || !this.message) {
      // Display an alert if required fields are not filled
      alert('Please fill in the required fields.');
    } else {
      // Log email and message to the console
      console.log('Email: ', this.email);
      console.log('Message: ', this.message);
      // Clear email and message fields after submission
      this.email = '';
      this.message = '';
    }
  }
}
