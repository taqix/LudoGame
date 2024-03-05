import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawnComponent } from '../pawn/pawn.component';
@Component({
  selector: 'Tile',
  standalone: true,
  imports: [CommonModule, PawnComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input() cell!: string;
  @Input() index!: number;
  @Input() isSpawn!: boolean;
  @Input() color!: string;
}
