import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { error } from 'console';
import { Table } from '../../models/Table';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  ngOnInit(): void {
    this.getMethod();
    // this.postMethod();
  }

  public getMethod() {
    this.http.get('http://localhost:3000/api/products').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
      this.dataSource = data;
    });
  }

  // public postMethod() {
  //   const header = new HttpHeaders({
  //     contentType: 'application/json'
  //   })
  //   let body = {
  //     "num": 5,
  //     "name": "english",
  //     "author": "xyz",
  //     "pages": 890
  //   }
  //   this.http.post('http://localhost:3000/api/products',body, {headers: header}).subscribe((data) => {
  //     console.log(data);
  //     this.postJsonValue = data;
  //   });
  // }

  // record: Table[] = [
  //   {
  //     'position': 1,
  //      'name':'Biology',
  //      'author': 'Michael',
  //      'pages': 300
  //   },
  //   {
  //     'position': 2,
  //      'name':'Biology',
  //      'author': 'Michael',
  //      'pages': 300
  //   },
  //   {
  //     'position': 3,
  //      'name':'Biology',
  //      'author': 'Michael',
  //      'pages': 300
  //   },
  //   {
  //     'position': 4,
  //      'name':'Biology',
  //      'author': 'Michael',
  //      'pages': 300
  //   },
  //   {
  //     'position': 5,
  //      'name':'Biology',
  //      'author': 'Michael',
  //      'pages': 300
  //   }
  // ];
}