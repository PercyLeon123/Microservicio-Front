import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>(); /* Parametro del componente */
  estadoUsuario:boolean = false;
  usuarioSubscription: Subscription;

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadServicio.seguridadCambio.subscribe(status =>{
      this.estadoUsuario = status;
    })
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }
}
