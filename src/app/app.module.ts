import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character-alita/character.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { EventsComponent } from './events/events.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AlumnoTituloPipe } from '../pipes/alumno-titulo.pipe';
import { CalcPersonsListAlumnosComponent } from './list-alumnos/calc-persons-list-alumnos/calc-persons-list-alumnos.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListAlumnosCursoComponent } from './list-alumnos-curso/list-alumnos-curso.component';
import { FilterCursoComponent } from './list-alumnos-curso/filter-curso/filter-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ButtonsComponent,
    EventsComponent,
    ListAlumnosComponent,
    AlumnoTituloPipe,
    CalcPersonsListAlumnosComponent,
    ListAlumnosCursoComponent,
    FilterCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
