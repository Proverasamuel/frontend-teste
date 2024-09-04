import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from "./components/usuario-list/usuario-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
