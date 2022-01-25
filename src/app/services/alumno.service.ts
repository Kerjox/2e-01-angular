import { Injectable } from '@angular/core';
import { Alumno } from "../classes/alumno";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos: Alumno[];

  constructor() {

    this.alumnos = [
      new Alumno('kerjox', 'AAA', '2/28/1990', 'H'),
      new Alumno('Alcachofa', 'BBB', '10/24/2004', 'H'),
      new Alumno('Juan', 'CCC', '12/1/2008', 'H'),
      new Alumno('Alba', 'DDD', '11/18/2007', 'M')
    ];
  }

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }
}
