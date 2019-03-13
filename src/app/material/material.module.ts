import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatSliderModule, MatInputModule, MatIconModule, MatSnackBarModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  declarations: [],
})
export class MaterialModule { }
