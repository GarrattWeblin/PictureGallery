import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniaturePortfolioComponent } from './miniature-portfolio/miniature-portfolio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'miniature-portfolio', component: MiniaturePortfolioComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
