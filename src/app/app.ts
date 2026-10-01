import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  standalone: true,
  imports: [Calculadora],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
