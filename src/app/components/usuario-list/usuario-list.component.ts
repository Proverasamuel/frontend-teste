import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }

  addUsuario(nome: string, email: string, senha: string): void {
    const usuario = { nome, email, senha };
    this.usuarioService.addUsuario(usuario).subscribe(() => {
      this.usuarios.push(usuario);
    });
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
    });
  }
}
