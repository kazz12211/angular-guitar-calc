import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FretComponent } from './components/fret/fret.component';
import { HomeComponent } from './components/home/home.component';
import { SaddleComponent } from './components/saddle/saddle.component';
import { FingerboardComponent } from './components/fingerboard/fingerboard.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'fret', component: FretComponent
  },
  {
    path: 'saddle', component: SaddleComponent
  },
  {
    path: 'fingerboard', component: FingerboardComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
