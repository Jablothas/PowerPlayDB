import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Record } from './logic/entity/record.entity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'legendary-logbook';

  // loadRecordList(): Record[] {
  //   return [
  //     new Record('Record 1'),
  //     new Record('Record 2'),
  //     new Record('Record 3'),
  //   ];}
}
