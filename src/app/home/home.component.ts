import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LatestSectionComponent } from '../latest-section/latest-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, LatestSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
