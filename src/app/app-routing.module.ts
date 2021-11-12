import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component'
import { KanjilistDetailComponent } from './pages/kanjilist-detail/kanjilist-detail.component';
import { KanjilistComponent } from './pages/kanjilist/kanjilist.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent},
  {path: 'kanjilist', pathMatch: 'full', component: KanjilistComponent},
  {path: 'kanjistlis/:id', pathMatch: 'full', component: KanjilistDetailComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
