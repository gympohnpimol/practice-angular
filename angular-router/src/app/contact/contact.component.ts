import { Component, OnInit } from '@angular/core';
import { contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
    this.getContact();
  }
  contacts: contact[] = [];
  getContact(): void {
    this.contact = this.ContactService.getContact();
  }

}
