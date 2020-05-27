import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectronicaPage } from './electronica.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronicaPageRoutingModule {}
