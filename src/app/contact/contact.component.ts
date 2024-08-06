import { Component } from '@angular/core';
import { StarDarkComponent } from "../star-dark/star-dark.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarDarkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  flagUserName: boolean = false;
  flagAge: boolean = false;
  flagEmail: boolean = false;
  flagPassWord: boolean = false;
  userNameInput(e: any, name: string): void {
    if (e.target.value != '' && name == 'userName') {
      this.flagUserName = true;
    } else if (e.target.value == '' && name == 'userName') {
      this.flagUserName = false;
    }
    if (e.target.value != '' && name == 'userAge') {
      this.flagAge = true;
    } else if (e.target.value == '' && name == 'userAge') {
      this.flagAge = false;
    }
    if (e.target.value != '' && name == 'userEmail') {
      this.flagEmail = true;
    } else if (e.target.value == '' && name == 'userEmail') {
      this.flagEmail = false;
    }
    if (e.target.value != '' && name == 'userPassword') {
      this.flagPassWord = true;
    } else if (e.target.value == '' && name == 'userPassword') {
      this.flagPassWord = false;
    }
  }
}
