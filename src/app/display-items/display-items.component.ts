import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {
  @Input() currentList: [] = [];
  @Input() toList: [] = [];
  @Input() isDeleteOnly = true;
  searchField: FormControl ;
  searchTerm: any;


  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .pipe(
           debounceTime(400),
        )
        .subscribe(term => {
         // this.searches.push(term);
          this.searchTerm = term;
          console.log(term);
        });

  }

  moveItem(index) {
     this.toList.push(this.currentList[index]);
     this.currentList.splice(index, 1);

  }

  deleteItem(index) {
    if (this.isDeleteOnly) {
      this.currentList.splice(index, 1);
    } else {
        this.moveItem(index);
    }
  }
}
