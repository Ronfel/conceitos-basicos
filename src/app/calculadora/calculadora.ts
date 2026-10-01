import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.scss',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  
  somar() {
    console.log('Somando', this.numero1, this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }
}
