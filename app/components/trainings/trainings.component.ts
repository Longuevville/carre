import { Component, OnInit } from '@angular/core';
//import { transcode } from 'buffer';
import {Training} from 'src/app/model/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  constructor() { }
  

  ngOnInit(): void {
  }
displayTrainings(){
  this.listTrainings = [
    {
      id: 1, name: 'Java', description: 'Formation Java SE8 sur 5 jours', price: 1500,quantity: 1
    },
    {
      id: 2, name: 'DotNet', description: 'Formation DotNet 3 jours', price: 1000, quantity: 1
    },
    {
      id: 3, name: 'Python', description: 'Formation Python/Django 5 jours', price: 1500,quantity: 1
    },
  ];
}


//Methde pour ajouter une formation au panier

onAddToCart(training:Training){
  console.log(training.name)
  console.log(training.quantity);
}


}
