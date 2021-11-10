import { Component, OnInit } from '@angular/core';
import {Pizzas} from "../models/pizzas";

@Component({
  selector: 'app-list-of-pizzas',
  templateUrl: './list-of-pizzas.component.html',
  styleUrls: ['./list-of-pizzas.component.scss']
})
export class ListOfPizzasComponent implements OnInit {

  constructor() { }

  pizzas: Pizzas[] = [
    {
      id: 1,
      name: 'Margherita',
      desc: 'Sauce tomate, Mozarella, Basilic',
      price: 11,
      image: 'assets/img/margherita.png'
    },
    {
      id: 2,
      name: 'Prosciutto',
      desc: 'Sauce tomate, mozarella, prosciutto, roquette',
      price: 12,
      image: 'assets/img/prosciutto.png'
    },
    {
      id: 3,
      name: 'Regina',
      desc: 'Sauce tomate, jambon, champignon, olives',
      price: 11.5,
      image: 'assets/img/regina.jpg'
    },
    {
      id: 4,
      name: 'Funghi',
      desc: 'Sauce tomate, mozarella, Champignons',
      price: 12,
      image: 'assets/img/funghi.png'
    }
  ]

  ngOnInit(): void {
  }

}
