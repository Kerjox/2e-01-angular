import { IAlumno } from "../interfaces/IAlumno";


export class Alumno implements IAlumno {

  name: string;
  street: string;
  date: string;
  gender: string;

  constructor(name: string, street: string, date: string, gender: string) {
    this.name = name;
    this.street = street;
    this.date = date;
    this.gender = gender;
  }

  edad(): number {
    return 0;
  }
}
