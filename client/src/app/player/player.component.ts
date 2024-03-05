import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerI } from '../types';
@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() player!: PlayerI;
}
