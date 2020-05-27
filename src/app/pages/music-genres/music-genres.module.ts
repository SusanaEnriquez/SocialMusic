import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicGenresPageRoutingModule } from './music-genres-routing.module';

import { MusicGenresPage } from './music-genres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicGenresPageRoutingModule
  ],
  declarations: [MusicGenresPage]
})
export class MusicGenresPageModule {}
