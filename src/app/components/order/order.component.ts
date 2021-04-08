import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  dialogDetailOrder: boolean = false;
  selectedValues: String[] = [];
  moreFilter: boolean = false;
  filterDate: string = '';

  dataOrder = [
    {orderId: '2001', orderDate: '20 Jan 2021, 18:30', customerName: 'Fazri Anggriawan', items: '3 items', total: '2,500,000', status: 'Waiting', payment: 'Paid'},
    {orderId: '2002', orderDate: '21 Jan 2021, 14:12', customerName: 'Julita Widyasafitrie', items: '1 items', total: '1,250,000', status: 'On Process', payment: 'Unpaid'},
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
