import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'MainComponent',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nombre: string;
  tile: Tile = { text: 'One', cols: 1, rows: 1 }

  @ViewChild('miFormulario', { static: false }) formulario: NgForm | undefined;

  constructor() {
    this.nombre = 'Karl';

  }

  ngOnInit() {

  }

  cambiarNombre(formulario: NgForm) {
    console.log(formulario.value.nombre)
    this.nombre = formulario.value.nombre;
  }

}
