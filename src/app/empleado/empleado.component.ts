import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría el empleado</p>",          *Esta seria la forma de poner el template en linea (inline)
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"]               *Esta seria la forma de poner el style en linea (inline)
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Diaz";
  edad = 30;
  // private edad = 30;                               *Esta seria la forma de declarar una variable privada sólamente accesible desde este documento.
  // empresa = "Ticmatic";
  // getEdad(){                                       *Esta seria la forma de crear un método para obtener la edad.                  
  //   return this.edad;
  // }
  habilitacionCuadro = false;
  usuRegistrado = false;

  
  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  llamaEmpresa(value:string){
  }

  constructor() { }

  ngOnInit(): void {
  }

}
