import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ludo-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ludo-board.component.html',
  styleUrl: './ludo-board.component.scss',
})
export class LudoBoardComponent {
  boardCells: string[] = Array(121).fill('');

  constructor() {}
}
