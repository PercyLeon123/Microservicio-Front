import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})
export class LibrosComponent {

  libros = ['Matematica 1', 'Algoritmos basico', 'Algebra basico'];

  eliminarLibro(libro:string){
    this.libros = this.libros.filter(p => p != libro);
  }

}
