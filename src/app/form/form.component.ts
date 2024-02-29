import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() onAddTask: EventEmitter<string> = new EventEmitter();

  name!: string;
  city!: string;
  county!: string;
  state!: string;
  zipCode!: string;
  street!: string;
  apt!: string;
  action!: string;
  reminder: boolean = false;
  showAddTask!: boolean;

  onSubmit() {
    console.log(this.action);
  }
}
