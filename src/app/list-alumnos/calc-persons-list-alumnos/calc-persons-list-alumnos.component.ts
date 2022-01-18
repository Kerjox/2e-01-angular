import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calc-persons-list-alumnos',
  templateUrl: './calc-persons-list-alumnos.component.html',
  styleUrls: ['./calc-persons-list-alumnos.component.css']
})
export class CalcPersonsListAlumnosComponent implements OnInit {

  @Input() totalPersons: number = 0;
  @Input() totalMen: number = 0;
  @Input() totalWomen: number = 0;

  @Output() genderSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeGender(value: string) {
    this.genderSelected.emit(value);
    console.log(value);
  }
}
