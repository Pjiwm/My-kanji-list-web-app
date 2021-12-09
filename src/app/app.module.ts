import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './pages/home/home.component'
import { BackgroundComponent } from './background/background.component'
import { AboutComponent } from './pages/about/about.component'
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component'
import { KanjilistDetailComponent } from './pages/kanjilist.detail/kanjilist.detail.component'
import { KanjilistNewComponent } from './pages/kanjilist.new/kanjilist.new.component'
import { KanjilistEditComponent } from './pages/kanjilist.edit/kanjilist.edit.component'
import { GuideComponent } from './pages/guide/guide.component'
import { GuideDetailComponent } from './pages/guide.detail/guide.detail.component'
import { GuideNewComponent } from './pages/guide.new/guide.new.component'
import { GuideEditComponent } from './pages/guide.edit/guide.edit.component'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { TokenInterceptor } from './services/TokenIncreptor';
import { PracticeresourceComponent } from './pages/practiceresource/practiceresource.component';
import { PracticeresourceDetailComponent } from './pages/practiceresource.detail/practiceresource.detail.component';
import { PracticeresourceNewComponent } from './pages/practiceresource.new/practiceresource.new.component'

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
    KanjilistNewComponent,
    KanjilistEditComponent,
    GuideComponent,
    GuideDetailComponent,
    GuideNewComponent,
    GuideEditComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PracticeresourceComponent,
    PracticeresourceDetailComponent,
    PracticeresourceNewComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
