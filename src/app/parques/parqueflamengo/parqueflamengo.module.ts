import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueflamengoPageRoutingModule } from './parqueflamengo-routing.module';

import { ParqueflamengoPage } from './parqueflamengo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueflamengoPageRoutingModule
  ],
  declarations: [ParqueflamengoPage]
})
export class ParqueflamengoPageModule {}
