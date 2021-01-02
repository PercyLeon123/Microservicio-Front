import { Subject } from 'rxjs';

export class LibrosService {
  libroSubject = new Subject();
  private libros = ['Libro de Percy', 'Libro de Mate', 'Libro PHP'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.libroSubject.next();
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x=> x != libroNombre);
    this.libroSubject.next();
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
