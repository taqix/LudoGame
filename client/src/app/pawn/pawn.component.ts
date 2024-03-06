import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
  @Input() parent_index!: number;
  @ViewChild('', { read: ElementRef })
  myDiv!: ElementRef;
}
