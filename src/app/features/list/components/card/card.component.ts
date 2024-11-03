import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  product = input.required<Product>();

  @Output() edit = new EventEmitter()

  productTitle = computed(() => this.product().title);
  //Computed => É um Signal que permite leitura, é reativo

  onEdit() {
    this.edit.emit();
  }
}
