import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  name: string = 'Alita';
  surname: string = 'Battle Angel';
  direction: string = 'Iron City';
  age: number = 224;
  nicknames: string[] = ['do-9', 'do-8'];

  constructor() { }

  ngOnInit(): void {
  }

  getNombreCompleto(): string {

    return ''.concat(this.name, ' ', this.surname);
  }

  aumentarEdad(): void {

    this.age += 1;
  }

  disminuirEdad(): void {

    this.age -= 1;
  }

}
