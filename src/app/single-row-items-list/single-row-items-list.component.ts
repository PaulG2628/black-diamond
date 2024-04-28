import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-single-row-items-list',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './single-row-items-list.component.html',
  styleUrl: './single-row-items-list.component.scss',
})
export class SingleRowItemsListComponent {}
