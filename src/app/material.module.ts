import { NgModule } from '@angular/core';
import {
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
