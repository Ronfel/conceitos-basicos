import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';
import { ListaCompras } from './lista-compras/lista-compras';

@Component({
  standalone: true,
  imports: [Calculadora, ListaCompras],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
