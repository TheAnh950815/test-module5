import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  id?: any;
  //
  // constructor(private bookService: BookService,
  //             private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = paramMap.get('id');
  //     this.getBook.(+this.id);
  //   });
  // }


  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getBook(+this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  updateBook(id: number) {
    const book = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
