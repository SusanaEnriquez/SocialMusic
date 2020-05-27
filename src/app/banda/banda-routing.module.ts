import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandaPage } from './banda.page';

const routes: Routes = [
  {
    path: '',
    component: BandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandaPageRoutingModule {}
