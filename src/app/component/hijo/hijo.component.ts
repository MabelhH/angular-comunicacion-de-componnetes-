import { Component,Input,OnInit,Output,EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent  {
@Input() textohijo:string='';



}
