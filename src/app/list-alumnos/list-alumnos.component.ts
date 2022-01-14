import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  //alumnos: any[] = [];
  alumnos: any[] = [
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

  constructor() { }

  ngOnInit(): void {

    console.log(this.alumnos.length);
  }

}
