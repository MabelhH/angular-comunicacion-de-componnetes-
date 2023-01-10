import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { ComponentModule } from '../component/component.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    PadreComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    PadreComponent
  ]
})
export class PagesModule { }
