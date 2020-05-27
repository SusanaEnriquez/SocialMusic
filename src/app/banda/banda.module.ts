import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandaPageRoutingModule } from './banda-routing.module';

import { BandaPage } from './banda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandaPageRoutingModule
  ],
  declarations: [BandaPage]
})
export class BandaPageModule {}
