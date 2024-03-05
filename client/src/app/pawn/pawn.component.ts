import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pawn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pawn.component.html',
  styleUrl: './pawn.component.scss',
})
export class PawnComponent {
  @Input() color!: string;
}
