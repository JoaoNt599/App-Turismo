import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquenacionaldatijucaPageRoutingModule } from './parquenacionaldatijuca-routing.module';

import { ParquenacionaldatijucaPage } from './parquenacionaldatijuca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquenacionaldatijucaPageRoutingModule
  ],
  declarations: [ParquenacionaldatijucaPage]
})
export class ParquenacionaldatijucaPageModule {}
