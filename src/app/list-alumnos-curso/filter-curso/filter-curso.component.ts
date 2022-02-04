import { Component, Input, OnInit } from '@angular/core';
import { Curso } from "../../classes/curso";
import { CursoService } from "../../services/curso.service";

@Component({
  selector: 'app-filter-curso',
  templateUrl: './filter-curso.component.html',
  styleUrls: ['./filter-curso.component.css']
})
export class FilterCursoComponent implements OnInit {

  @Input() cursoSelected: number;
  cursos: Curso[];

  constructor(private cursoService: CursoService) {
    this.cursoSelected = 0;
    this.cursos = [];
  }

  ngOnInit(): void {

    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  filter() {
    console.log(this.cursoSelected)
  }
}
