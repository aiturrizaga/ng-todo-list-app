import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {

}
