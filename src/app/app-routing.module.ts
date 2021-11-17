import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component'
import { KanjilistDetailComponent } from './pages/kanjilist.detail/kanjilist.detail.component'
import { KanjilistEditComponent } from './pages/kanjilist.edit/kanjilist.edit.component'
import { KanjilistNewComponent } from './pages/kanjilist.new/kanjilist.new.component'
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'kanjilist', pathMatch: 'full', component: KanjilistComponent },
  { path: 'kanjilist/new', pathMatch: 'full', component: KanjilistNewComponent },
  {path: 'kanjilist/edit/:id', pathMatch: 'full', component: KanjilistEditComponent},
  { path: 'kanjilist/:id', pathMatch: 'full', component: KanjilistDetailComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
