import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { Delivery } from '../../delivery.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  lista : Delivery[]

 constructor(private deliveryServer: DeliveryServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
     this.deliveryServer.readByIddelivery(id).subscribe((deliverys: Delivery[]) => {
     this.lista = deliverys        
    })
  }

}
