import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría el empleado</p>",          *Esta seria la forma de poner el template en linea (inline)
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"]                 *Esta seria la forma de poner el style en linea (inline)
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
