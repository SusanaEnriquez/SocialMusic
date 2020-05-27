import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KpopPageRoutingModule } from './kpop-routing.module';

import { KpopPage } from './kpop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KpopPageRoutingModule
  ],
  declarations: [KpopPage]
})
export class KpopPageModule {}
