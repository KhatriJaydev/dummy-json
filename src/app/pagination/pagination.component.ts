import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() pageNumArray: Array<number> = [];
  @Input() pagePerItemArray: Array<number> = [];
  selectedPagePerItem = 30;

  @Output() goToNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() goToPrevios: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectPagePerItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectPageNumber: EventEmitter<number> = new EventEmitter<number>();

  goToPreviousPageEmit() {
    this.current--;
    this.goToPrevios.emit(this.current);
  }

  goToNextPageEmit() {
    this.current++;
    this.goToNext.emit(this.current);

  }

  selectPageNumberEmit(page: number) {
    this.current = page;
    this.selectPageNumber.emit(page);
  }

  setPagePerLimit() {
    this.current = 1;
    this.selectPagePerItem.emit(this.selectedPagePerItem);
  }
}
