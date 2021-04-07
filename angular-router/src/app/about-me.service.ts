import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { aboutme} from './aboutme';
import { aboutmes } from './mock-about-me';
@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor() { }
  getContact(): Observable<aboutme[]> {
    const contact = of(aboutmes);
    return contact;
  }
}
