import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-lista-compras',
  styleUrl: './lista-compras.scss',
  templateUrl: './lista-compras.html',
})
export class ListaCompras {

  item: string = '';

  adicionarItem() {
    console.log('Adicionando item', this.item);
  }
}
