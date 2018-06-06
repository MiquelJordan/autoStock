import { Component, OnInit } from '@angular/core';
import { StockService } from '../../service/stockService/stock.service'

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  cenpacs: any[] = null;
  nefabs: any[] = null;

  constructor(private stockService: StockService) { }



  ngOnInit() {
    this.cenpacs = this.stockService.cenpacs;
    this.nefabs = this.stockService.nefabs;

  };

  needOrder(cenpac, nefab) {
    if (cenpac.stock < cenpac.stockLimit) {
      console.log(cenpac)
      return true;

    }
    if (nefab.stock < nefab.stockLimit) {
      console.log(nefab)
      return true;

    }
    return false;
  };

  commandValidation(): void {
    for (let cenpac of this.cenpacs) {
      if (cenpac.stock <= cenpac.stockLimit && cenpac.toOrder == true) {
        cenpac.order = true;
      }
      cenpac.toOrder = false;
    };
    for (let nefab of this.nefabs) {
      if (nefab.stock <= nefab.stockLimit && nefab.toOrder == true) {
        nefab.order = true;
      }
      nefab.toOrder = false;

    };



  }


  toOrder(event, index, suplierName): void {
    console.log(event.target.checked, index);
    if (suplierName == 'cenpacs')
      if (event.target.checked) {

        this.cenpacs[index].toOrder = true;
      } else {
        this.cenpacs[index].toOrder = false;
      }

    console.log(event.target.checked, index);
    if (suplierName == 'nefabs')
      if (event.target.checked) {

        this.nefabs[index].toOrder = true;
      } else {
        this.nefabs[index].toOrder = false;
      }

    console.log(event)

  };


}
