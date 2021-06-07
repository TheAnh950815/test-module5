import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {Book} from "../model/book";


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  saveBook(book?:Book): Observable<Book> {
    return this.http.post<Category>(API_URL + '/books', book);
  }


  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  updateBook(id: number, category: Category): Observable<Category> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, category);
  }

  deleteBook(id: number): Observable<Category> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }

}
