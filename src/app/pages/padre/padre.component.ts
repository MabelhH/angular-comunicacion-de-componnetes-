import { Component,Output,OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

@Output() cambiartexto:string='';
@Output() repuesta:string='';

public formLogin!: FormGroup;
correo!:string;

constructor(private formBuilder:FormBuilder){

}

ngOnInit(): void {
  this.formLogin = this.formBuilder.group({
    nombre:['', 
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
    DNI:['', 
      [
        Validators.required,
        Validators.maxLength(8)
      ]
    ],
    estado:[
      ''
    ],
    color:[
      ''
    ]

    
    
  })

  this.loadAPI()
}

chageestado = ()=>{
  console.log(this.formLogin.value.estado)
  if(this.formLogin.value.estado === 'soltero'){
   this.formLogin.get('color')?.setValidators([Validators.required]);
   this.formLogin.get('color')?.setValidators([Validators.required]);
  }else{
   this.formLogin.get('color')?.clearValidators;
   this.formLogin.get('color')?.updateValueAndValidity
  }
}
//function para simular la carga de un API
loadAPI():any{
  const response = {
    nombre:'',
    DNI:'',
    estado:''
  };



  this.formLogin.patchValue(response);
  
  
 
  
}


send(): any{
  console.log(this.formLogin.value)
}


}




