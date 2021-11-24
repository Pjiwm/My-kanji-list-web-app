import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './pages/about/about.component'
import { GuideDetailComponent } from './pages/guide.detail/guide.detail.component'
import { GuideNewComponent } from './pages/guide.new/guide.new.component'
import { GuideComponent } from './pages/guide/guide.component'
import { HomeComponent } from './pages/home/home.component'
import { KanjilistDetailComponent } from './pages/kanjilist.detail/kanjilist.detail.component'
import { KanjilistEditComponent } from './pages/kanjilist.edit/kanjilist.edit.component'
import { KanjilistNewComponent } from './pages/kanjilist.new/kanjilist.new.component'
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  // kanjilist
  { path: 'kanjilist', pathMatch: 'full', component: KanjilistComponent },
  { path: 'kanjilist/new', pathMatch: 'full', component: KanjilistNewComponent },
  {path: 'kanjilist/edit/:id', pathMatch: 'full', component: KanjilistEditComponent},
  { path: 'kanjilist/:id', pathMatch: 'full', component: KanjilistDetailComponent },
  // guide
  { path: 'guide', pathMatch: 'full', component: GuideComponent },
  { path: 'guide/new', pathMatch: 'full', component: GuideNewComponent },
  { path: 'guide/:id', pathMatch: 'full', component: GuideDetailComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
