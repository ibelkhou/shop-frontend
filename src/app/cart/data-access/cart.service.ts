import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'app/products/data-access/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  constructor() { }

  // Méthode pour ajouter un produit au panier
  addToCart(product: Product) {
    this.cartItems.push(product);
    this.updateCartCount();
  }

  // Méthode pour obtenir tous les produits du panier
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // Méthode pour vider le panier
  clearCart() {
    this.cartItems = [];
    this.updateCartCount();
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartCount();
    }
  }

  getCartCount(): number {
    return this.cartItems.length;
  }
  
  private updateCartCount() {
    this.cartCountSubject.next(this.getCartCount());
  }
}