import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    email: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    if (this.contact.email && this.contact.message) {
      this.submitted = true;

      this.contact = {
        email: '',
        message: ''
      };
    }
  }
}
