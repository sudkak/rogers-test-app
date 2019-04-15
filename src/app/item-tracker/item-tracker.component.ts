import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-tracker',
  templateUrl: './item-tracker.component.html',
  styleUrls: ['./item-tracker.component.css']
})
export class ItemTrackerComponent implements OnInit {
   item: any = '';
   unpackedItems: Array<any> = [];
   packedItems: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }
   addItems() {
        this.unpackedItems.push(this.item);
      }

  moveAll() {
     this.unpackedItems.push(...this.packedItems);
     this.packedItems = [];
  }
}
