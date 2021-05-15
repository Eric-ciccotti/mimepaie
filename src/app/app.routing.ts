import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { PagesComponent } from "./pages/pages.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { PageServiceProposesComponent } from "./pages/page-service-proposes/page-service-proposes.component";
import { PageExternalisationComponent } from "./pages/page-externalisation/page-externalisation.component";

export const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
        pathMatch: "full",
      },
      { path: "service-proposes", component: PageServiceProposesComponent },
      {
        path: "externalisation",
        component: PageExternalisationComponent,
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./pages/contact/contact.module").then((m) => m.ContactModule),
      },
      {
        path: "tarification",
        loadChildren: () =>
          import("./pages/pricing/pricing.module").then((m) => m.PricingModule),
      },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
      relativeLinkResolution: "legacy",
      anchorScrolling: "enabled",
      initialNavigation: "enabled", // for one load page, without reload
      // useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
