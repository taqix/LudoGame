import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { convertBoard } from '../utils';
import { BoardI } from '../types';
@Component({
  selector: 'app-ludo-board',
  standalone: true,
  imports: [CommonModule, TileComponent],
  templateUrl: './ludo-board.component.html',
  styleUrl: './ludo-board.component.scss',
})
export class LudoBoardComponent implements OnInit {
  boardCells: BoardI[] = Array();

  ngOnInit(): void {
    this.boardCells = convertBoard();
    console.log(this.boardCells);
  }
  constructor() {}
}
