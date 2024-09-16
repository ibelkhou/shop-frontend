import { Injectable } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  // Méthode pour ajouter un produit au panier
  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  // Méthode pour obtenir tous les produits du panier
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // Méthode pour vider le panier
  clearCart() {
    this.cartItems = [];
  }
  
  removeFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartCount(): number {
    return this.cartItems.length;
  }
}