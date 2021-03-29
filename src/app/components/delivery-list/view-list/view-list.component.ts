import { Component, OnInit } from '@angular/core';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { Delivery } from '../../delivery.model';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  lista : Delivery[]

 constructor(private deliveryServer: DeliveryServicesService) { }

  ngOnInit(): void {
    this.deliveryServer.read().subscribe(deliverys => {     
      this.lista = deliverys
      console.log( this.lista)
    })
  }

}
