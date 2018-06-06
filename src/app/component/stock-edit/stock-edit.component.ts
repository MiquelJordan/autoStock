import { Component, OnInit } from '@angular/core';
import { StockService } from '../../service/stockService/stock.service'

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  cenpacs: any[] = null;
  nefabs: any[] = null;
  valuePre: number;
  factor: number = 1;
  default = true;

  constructor(private stockService: StockService) { }



  ngOnInit() {
    this.cenpacs = this.stockService.cenpacs;
    this.nefabs = this.stockService.nefabs;
    this.factor = 1;
  };

  onCheck(factor) {
    console.log("hey")

    this.factor = factor
  };

  incrementePrelevement(p) {
    console.log("hey")
    p.prelevement += this.factor

  };


  decrementePrelevement(p) {

    p.prelevement -= this.factor

  };


  editStock() {
    for (let cenpac of this.cenpacs) {
      console.log(cenpac);
      cenpac.stock = cenpac.stock - cenpac.prelevement;
      cenpac.prelevement = 0;
      if (cenpac.stockLimit >= cenpac.stock) {

        console.log(`commande de ${cenpac.name} à faire`)
      }


    }

    for (let nefab of this.nefabs) {
      console.log(nefab);
      nefab.stock = nefab.stock - nefab.prelevement;
      nefab.prelevement = 0;
      if (nefab.stockLimit >= nefab.stock) {

        console.log(`commande de ${nefab.name} à faire`)
      }


    }




  }
}
