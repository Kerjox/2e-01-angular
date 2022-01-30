import { Injectable } from '@angular/core';
import { Alumno } from "../classes/alumno";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos: Alumno[];

  constructor(private http : HttpClient) {

    this.alumnos = [];
  }

  getAlumnos(): Observable<Alumno[]> {

    return this.http.get<Alumno[]>("http://localhost:5001/api/Alumnos");
  }
}
