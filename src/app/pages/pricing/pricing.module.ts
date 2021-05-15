import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { PricingComponent } from "./pricing.component";
import { TarifsComponent } from "./tarifs/tarifs.component";

export const routes = [
  { path: "", component: PricingComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [PricingComponent, TarifsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PricingModule {}
