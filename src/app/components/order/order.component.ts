import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  dialogDetailOrder: Boolean = false;
  selectedValues: String[] = [];

  dataOrder = [
    {orderId: '2001', orderDate: '20 Jan 2021, 18:30', customerName: 'Fazri Anggriawan', customerEmail: 'fazri.anggriawan@gmail.com', customerPhone: '082110661680', items: '3 items', total: '2,500,000', status: 'Waiting for payment'},
    {orderId: '2002', orderDate: '21 Jan 2021, 14:12', customerName: 'Fazri Anggriawan', items: '3 items', total: '2,500,000', status: 'On Process'},
  ];

  products = [
    {id: '001', name: 'Myth 35', category: 'Backpack', variant: 'Small - All Black', qty: '1', price: '1,250,000'},
    {id: '002', name: 'Myth 35', category: 'Backpack', variant: 'Medium - Red Black', qty: '1', price: '1,250,000'}
  ]

  selectOrder(event: []){
    console.log(event);
    this.dialogDetailOrder = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
