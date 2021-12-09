import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './pages/about/about.component'
import { GuideDetailComponent } from './pages/guide.detail/guide.detail.component'
import { GuideEditComponent } from './pages/guide.edit/guide.edit.component'
import { GuideNewComponent } from './pages/guide.new/guide.new.component'
import { GuideComponent } from './pages/guide/guide.component'
import { HomeComponent } from './pages/home/home.component'
import { KanjilistDetailComponent } from './pages/kanjilist.detail/kanjilist.detail.component'
import { KanjilistEditComponent } from './pages/kanjilist.edit/kanjilist.edit.component'
import { KanjilistNewComponent } from './pages/kanjilist.new/kanjilist.new.component'
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component'
import { LoginComponent } from './pages/login/login.component'
import { PracticeresourceDetailComponent } from './pages/practiceresource.detail/practiceresource.detail.component'
import { PracticeresourceEditComponent } from './pages/practiceresource.edit/practiceresource.edit.component'
import { PracticeresourceNewComponent } from './pages/practiceresource.new/practiceresource.new.component'
import { PracticeresourceComponent } from './pages/practiceresource/practiceresource.component'
import { RegisterComponent } from './pages/register/register.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  // login-register
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  // kanjilist
  { path: 'kanjilist', pathMatch: 'full', component: KanjilistComponent },
  { path: 'kanjilist/new', pathMatch: 'full', component: KanjilistNewComponent },
  { path: 'kanjilist/edit/:id', pathMatch: 'full', component: KanjilistEditComponent },
  { path: 'kanjilist/:id', pathMatch: 'full', component: KanjilistDetailComponent },
  // guide
  { path: 'guide', pathMatch: 'full', component: GuideComponent },
  { path: 'guide/new', pathMatch: 'full', component: GuideNewComponent },
  { path: 'guide/edit/:id', pathMatch: 'full', component: GuideEditComponent },
  { path: 'guide/:id', pathMatch: 'full', component: GuideDetailComponent },
  // practice resource
  { path: 'practiceresource', pathMatch: 'full', component: PracticeresourceComponent },
  { path: 'practiceresource/new', pathMatch: 'full', component: PracticeresourceNewComponent },
  { path: 'practiceresource/edit/:id', pathMatch: 'full', component: PracticeresourceEditComponent },
  { path: 'practiceresource/:id', pathMatch: 'full', component: PracticeresourceDetailComponent },
  // **
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
