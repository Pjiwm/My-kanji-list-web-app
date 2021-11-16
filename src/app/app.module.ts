import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// stuff from tutorial
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BackgroundComponent } from './background/background.component';
import { AboutComponent } from './pages/about/about.component';
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component';
import { KanjilistDetailComponent } from './pages/kanjilist.detail/kanjilist.detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BackgroundComponent,
    AboutComponent,
    KanjilistComponent,
    KanjilistDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
