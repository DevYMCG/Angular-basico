import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thork'];
  heroeDelete: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    this.heroeDelete =this.heroes.shift() || '';
  }

}
