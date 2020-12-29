import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent {

  usuarios = ['Luis', 'Fernando', 'Maria']
  usuarioNombre = 'Percy Leon';
  visible = false;

  constructor(){
    setTimeout(()=>{
      this.visible = true;
    },3000);
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }
}
