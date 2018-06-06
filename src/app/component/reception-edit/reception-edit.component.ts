import { Component, OnInit } from '@angular/core';
import { StockService } from '../../service/stockService/stock.service'


@Component({
  selector: 'app-reception-edit',
  templateUrl: './reception-edit.component.html',
  styleUrls: ['./reception-edit.component.css']
})

export class ReceptionEditComponent implements OnInit {

  cenpacs: any[] = null;
  nefabs: any[] = null;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.cenpacs = this.stockService.cenpacs;
    this.nefabs = this.stockService.nefabs;
  };

  onReception() {
    for (let cenpac of this.cenpacs) {

      if (cenpac.order == true && cenpac.toRecep == true) {
        cenpac.stock = cenpac.stock + cenpac.inDelivery;
        cenpac.order = false;
      }
      cenpac.toRecep = false;
    }
    for (let nefab of this.nefabs) {

      if (nefab.order == true && nefab.toRecep == true) {
        nefab.stock = nefab.stock + nefab.inDelivery;
        nefab.order = false;
      }
      nefab.toRecep = false;
    }
  };

  toRecep(event, index, suplierName): void {
    console.log(event.target.checked, index);
    if (suplierName == 'cenpac')
      if (event.target.checked) {
        this.cenpacs[index].toRecep = true;
      }
      else {
        this.cenpacs[index].toRecep = false;
      }

    console.log(event.target.checked, index);
    if (suplierName == 'nefabs')
      if (event.target.checked) {
        this.nefabs[index].toRecep = true;
      }
      else {
        this.nefabs[index].toRecep = false;
      }

    console.log(event)

  };




}
