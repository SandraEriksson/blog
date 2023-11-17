import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin = false; // Property to track the user's admin status, initialized as false by default

  // Method to toggle the user's admin status
  toggleUser() {
    this.admin = !this.admin;  // Toggles the value of 'admin' property between true and false
  }
} 
