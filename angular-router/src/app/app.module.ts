import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillComponent,
    PageNotFoundComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "about-me", component: AboutMeComponent},
      {path: "skill", component: SkillComponent},
      {path: "contact", component: ContactComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "", redirectTo: '/about-me', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
