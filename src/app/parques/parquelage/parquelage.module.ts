import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquelagePageRoutingModule } from './parquelage-routing.module';

import { ParquelagePage } from './parquelage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquelagePageRoutingModule
  ],
  declarations: [ParquelagePage]
})
export class ParquelagePageModule {}
