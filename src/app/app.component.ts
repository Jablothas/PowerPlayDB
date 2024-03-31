import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataTestComponent } from './view/data-test/data-test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTestComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  title = 'legendary-logbook'; 
  isMoveBarEnabled: boolean = false;

  toggleMoveBar() {
    this.isMoveBarEnabled = !this.isMoveBarEnabled;
  }
  
}
