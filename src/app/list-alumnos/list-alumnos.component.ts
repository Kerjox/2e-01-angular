import { Component, OnInit } from '@angular/core';
import { Alumno } from "../classes/alumno";
import { AlumnoService } from "../services/alumno.service";


@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  alumnos: Alumno[];
  alumnosToShow: Alumno[];

  constructor(private alumnoService: AlumnoService) {

    this.alumnos = this.alumnosToShow = alumnoService.getAlumnos();
  }

  getTotalPersonsNumber(): number {
    return this.alumnos.length;
  }

  getTotalMenNumber(): number {

    return this.alumnos.filter(a => a.gender === 'H').length;
  }

  getTotalWomenNumber(): number {

    return this.alumnos.filter(a => a.gender === 'M').length;
  }

  ngOnInit(): void {

    console.log( {
      TotalAlumnos: this.alumnos.length
    });
  }

  filterPersons($event: string) {

    switch ($event) {

      case 'H':
        this.alumnosToShow = this.alumnos.filter(value => value.gender === 'H');
        break;

      case 'M':
        this.alumnosToShow = this.alumnos.filter(value => value.gender === 'M');
        break;

      default:
        this.alumnosToShow = this.alumnos;

    }
  }

}
