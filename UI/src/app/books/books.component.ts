import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { error } from 'console';
import { Table } from '../../models/Table';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  public getJsonValue: any;
  // public postJsonValue: any;
  public displayColumn: string[]=['num','name','author','pages'];
  public dataSource: any =[];
  constructor(private http: HttpClient) { }

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    this.getMethod();
    // this.postMethod();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getMethod() {
    this.http.get('http://localhost:3000/api/products').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
      this.dataSource = data;
    });
  }
}