import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];

  constructor(private librosService: LibrosService) {}
  private libroSubscription: Subscription;

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.libroSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }
  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }

  guardarLibro(f: NgForm) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.NombreLibro);
    }
  }
}
