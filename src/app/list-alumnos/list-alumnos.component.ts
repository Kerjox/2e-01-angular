import { Component, OnInit } from '@angular/core';
import { IAlumno } from "../interfaces/IAlumno";


@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  //alumnos: any[] = [];
  alumnos: IAlumno[] = [
    {
      name: 'Kerjox',
      street: 'AAA',
      date: '2/28/1990',
      gender: 'H'
    },
    {
      name: 'Alcachofa',
      street: 'BBB',
      date: '10/24/2004',
      gender: 'H'
    },
    {
      name: 'Juan',
      street: 'CCC',
      date: '12/1/2008',
      gender: 'H'
    },
    {
      name: 'Alba',
      street: 'DDD',
      date: '11/18/2007',
      gender: 'M'
    }
  ];

  alumnosToShow: any[] = this.alumnos;

  constructor() { }

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

    console.log(this.alumnos.length);
  }

  filterPersons($event: string) {

    if ($event === 'H') {
      this.alumnosToShow = this.alumnos.filter(value => value.gender === 'H');
    } else if ($event === 'M') {
      this.alumnosToShow = this.alumnos.filter(value => value.gender === 'M');
    } else {
      return this.alumnosToShow = this.alumnos;
    }

    return null;
  }

}
