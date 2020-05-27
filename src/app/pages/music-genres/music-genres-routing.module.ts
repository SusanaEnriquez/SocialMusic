import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicGenresPage } from './music-genres.page';

const routes: Routes = [
  {
    path: '',
    component: MusicGenresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicGenresPageRoutingModule {}
