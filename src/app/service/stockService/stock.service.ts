import { Injectable } from '@angular/core';

@Injectable()
export class StockService {


  cenpacs: any[] = [
    {
      name: 'T2',
      prelevement: 0,
      stock: 90,
      stockLimit: 30,
      dimension: "30*20*17",
      order: false,
      inDelivery: 90,
      toRecep: false,
      toOrder: false,
    },
    {
      name: 'T6',
      prelevement: 0,
      stock: 90,
      stockLimit: 30,
      dimension: "43*31*25",
      order: false,
      inDelivery: 90,
      toRecep: false,
      toOrder: false,
    },
    {
      name: 'T9',
      prelevement: 0,
      stock: 90,
      stockLimit: 30,
      dimension: "54*34*32",
      order: false,
      inDelivery: 90,
      toRecep: false,
      toOrder: false,
    },
    {
      name: 'T10',
      prelevement: 0,
      stock: 90,
      stockLimit: 30,
      dimension: "65*45*40",
      order: false,
      inDelivery: 90,
      toRecep: false,
      toOrder: false,
    },
  ]

  nefabs: any[] = [
    {
      name: 'Grand couvercle',
      prelevement: 0,
      stock: 80,
      stockLimit: 40,
      dimension: "120*80",
      order: false,
      inDelivery: 80,
      toRecep: false,
      toOrder: false,

    },
    {
      name: 'Grande caisse',
      prelevement: 0,
      stock: 20,
      stockLimit: 10,
      dimension: "120*80*80",
      order: false,
      inDelivery: 20,
      toRecep: false,
      toOrder: false,

    },
    {
      name: 'Moyenne caisse',
      prelevement: 0,
      stock: 20,
      stockLimit: 10,
      dimension: "120*80*60",
      order: false,
      inDelivery: 20,
      toRecep: false,
      toOrder: false,

    },
    {
      name: 'Petite caisse',
      prelevement: 0,
      stock: 90,
      stockLimit: 30,
      dimension: "80*60*60",
      order: false,
      inDelivery: 40,
      toRecep: false,
      toOrder: false,

    },
    {
      name: 'Petit couvercle',
      prelevement: 0,
      stock: 90,
      stockLimit: 20,
      dimension: "80*60",
      order: false,
      inDelivery: 80,
      toRecep: false,
      toOrder: false,

    },
  ]

}


