import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
