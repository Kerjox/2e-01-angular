import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './charater/character.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { EventsComponent } from './events/events.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AlumnoTituloPipe } from './alumno-titulo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ButtonsComponent,
    EventsComponent,
    ListAlumnosComponent,
    AlumnoTituloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
