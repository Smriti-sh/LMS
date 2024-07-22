import { Injectable } from '@angular/core';
import { Table } from '../../models/Table';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { connect } from 'http2';
import { of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class UsersDataSource extends DataSource<Table> {

  users$ = new BehaviorSubject<Table[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private dataService: DataService){
    super();
  }

  connect():Observable<Table[]>{
    return this.users$.asObservable();
  }

  disconnect(): void{
    this.users$.complete();
  }

  loadUsers():void{
    this.isLoading$.next(true);
    this.dataService.getBooks().subscribe((users)=>{
      this.users$.next(users);
      this.isLoading$.next(false);
    });
  }
}