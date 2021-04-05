import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DtLatestOrder } from "../../interfaces/dt-latest-order";

@Component({
  selector: 'app-dt-order',
  templateUrl: './dt-order.component.html',
  styleUrls: ['./dt-order.component.css']
})
export class DtOrderComponent implements OnInit {

  dialogOrder: Boolean = false;
  disabled: Boolean = false;
  progress: MenuItem[] = [
    {label: 'Pending'},
    {label: 'Process'},
    {label: 'Production'},
    {label: 'Finishing'},
    {label: 'Shipping'},
  ]

  orderHistories = [
    { orderId: '123', date: '01-02-2021', productId: '00001', customer: 'Fazri Anggriawan', item: 'Myth 35', variant: 'Small - All Black', price: '1,250,000',qty: '1', total: '1,250,000', status: 'completed' },
    { orderId: '123', date: '01-02-2021', productId: '00002', customer: 'Fazri Anggriawan', item: 'Myth 35', variant: 'Small - All Black', price: '1,250,000',qty: '1', total: '1,250,000', status: 'completed' },
    { orderId: '123', date: '01-02-2021', productId: '00003', customer: 'Fazri Anggriawan', item: 'Myth 35', variant: 'Small - All Black', price: '1,250,000',qty: '1', total: '1,250,000', status: 'completed' },
  ];

  products = [
    { code: '123', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)'},
    { code: '124', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '125', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '126', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '127', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '128', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '129', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '130', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '131', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '132', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '133', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '134', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '135', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '136', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '137', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
    { code: '138', name: 'Fazri Anggriawan', category: 'Myth 35 (Small - All Black)', quantity: '1,250,000'},
  ];

  selectedProduct?: DtLatestOrder;
  rowGroupMetadata: any = {};

  selectProduct(event: { data: DtLatestOrder}){
    console.log(event.data);
    this.dialogOrder = true;
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.orderHistories) {
        for (let i = 0; i < this.orderHistories.length; i++) {
            let rowData = this.orderHistories[i];
            let representativeName = rowData.orderId;
            
            if (i == 0) {
                this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.orderHistories[i - 1];
                let previousRowGroup = previousRowData.orderId;
                if (representativeName === previousRowGroup)
                    this.rowGroupMetadata[representativeName].size++;
                else
                    this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
            }
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.updateRowGroupMetaData();
  }

}
