import { Component } from '@angular/core';
import { SingleRowItemsListComponent } from '../single-row-items-list/single-row-items-list.component';

@Component({
  selector: 'app-latest-section',
  standalone: true,
  imports: [SingleRowItemsListComponent],
  templateUrl: './latest-section.component.html',
  styleUrl: './latest-section.component.scss',
})
export class LatestSectionComponent {}
