import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  productTitle() {
    throw new Error('Method not implemented.');
  }
  products: Product[] = []; // Define como Product[] em vez de any[]
  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit() {
    this.productsService.getAll().subscribe((e) => {
      this.products = e;
    });
  }

  onEdit(item: Product) {
    console.log("🚀 ~ ListComponent ~ onEdit ~ item:", item)
    this.router.navigate(['/edit-product', item.id]);
  }
}
