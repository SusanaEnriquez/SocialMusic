import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronicaPageRoutingModule } from './electronica-routing.module';

import { ElectronicaPage } from './electronica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronicaPageRoutingModule
  ],
  declarations: [ElectronicaPage]
})
export class ElectronicaPageModule {}
