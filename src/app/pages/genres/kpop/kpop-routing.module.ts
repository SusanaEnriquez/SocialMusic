import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpopPage } from './kpop.page';

const routes: Routes = [
  {
    path: '',
    component: KpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpopPageRoutingModule {}
