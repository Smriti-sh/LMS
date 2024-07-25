import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { GeneratorComponent } from './generator/generator.component';
import { DrawerComponent } from './drawer/drawer.component';

const routes: Routes = [
  {path: 'generator',component: GeneratorComponent},
  {path:'books', component: BooksComponent},
  {path:'drawer', component:DrawerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
