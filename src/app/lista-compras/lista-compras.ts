import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  imports: [FormsModule],
  selector: 'app-lista-compras',
  styleUrl: './lista-compras.scss',
  templateUrl: './lista-compras.html',
})
export class ListaCompras {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);
    this.item = '';

    console.table(this.lista);
  }
  riscarItensComprados(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }
  limparLista() {
    this.lista = [];
  }
}
