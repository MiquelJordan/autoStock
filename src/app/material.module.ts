import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';






@NgModule({
  imports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,

  ],
  declarations: []
})
export class MaterialModule { }
