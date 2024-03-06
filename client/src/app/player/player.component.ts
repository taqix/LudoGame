import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerI } from '../types';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements OnInit {
  ngOnInit(): void {
    this.player_status = this.player.status;
    this.sid = Cookie.get('sid');
  }
  @Input() player!: PlayerI;
  @Output() changeStatusFromPlayer = new EventEmitter<string>();
  protected sid: string = '';
  protected player_status: string = '';
  protected changeStatus = (event: Event) => {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.player_status = '1';
    } else {
      this.player_status = '0';
    }
    this.changeStatusFromPlayer.emit(this.player_status);
  };
}
