import { Component, OnInit } from '@angular/core';
import { aboutme } from '../aboutme';
import { AboutMeService } from '../about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  AboutMeService: any;

  constructor() { }

  ngOnInit(): void {
    this.getAboutme();
  }
  aboutmes: aboutme[] = [];
  getAboutme(): void {
    this.aboutmes = this.AboutMeService.getContact();
  }

}
