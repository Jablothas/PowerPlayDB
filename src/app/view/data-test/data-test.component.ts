import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'data-test',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService], 
  templateUrl: './data-test.component.html',
  styleUrl: './data-test.component.css'
})
export class DataTestComponent implements OnInit {
  records: any[] = [];

  constructor(private dataService: DataService) {

  }

   ngOnInit(): void {
    this.dataService.getRecords().subscribe(
      (response) => {
        this.records = response;
      },
      (error) => {
        console.error('Error fetching records:', error);
      }
    );
  }
}
