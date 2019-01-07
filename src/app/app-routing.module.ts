import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { LiveComponent } from './live/live.component';
import { DevComponent } from './dev/dev.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'live', component: LiveComponent},
  { path: 'dev', component: DevComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
