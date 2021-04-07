import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { contact } from './contact';
import { contacts } from './mock-contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContact(): Observable<contact[]> {
    const contact = of(contacts);
    return contact;
  }
}
