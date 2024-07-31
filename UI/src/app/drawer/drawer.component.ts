import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent implements OnInit{
  opened = false;

  userDetails:any;

  attachment:any;
  isApiCalling: boolean = false;

  fontSize: number = 14;
  fileName = '';
  bookName: FormControl = new FormControl('');
  authorName: FormControl = new FormControl('');
  //  Make create button disable until the book is not uloaded successfully @jatin-sharam
  isCreating: boolean = false;

  constructor(
    private router: Router,
    private booksComponent: BooksComponent,
    private _activatedRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.booksComponent?.matDrawer?.open();
  }


  closeDrawer(): Promise<MatDrawerToggleResult> | any {
    this.router.navigate(['../'], {
      relativeTo: this._activatedRoute
    })
    return this.booksComponent?.matDrawer?.close();
  }

  ngOnDestroy(): void {
    this.closeDrawer();
  }
}
