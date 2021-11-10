import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {ListOfPizzasComponent} from "./components/list-of-pizzas/list-of-pizzas.component";

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'list_pizzas', component: ListOfPizzasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
