import {
  Component,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { CartService } from './cart/data-access/cart.service';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
})
export class AppComponent {
  title = "ALTEN SHOP";
  cartCount = 0; 

  constructor(private cartService: CartService) {}


  ngOnInit() {
    this.cartService.cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }
}
