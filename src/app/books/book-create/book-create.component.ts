import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-creat',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title:new FormControl('', Validators.required),
    author:new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),})

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new  FormControl('',Validators.required),
      title:new FormControl('', Validators.required),
      author:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
    })
  }

  submit() {
    const book = this.bookForm.value;
    this.bookService.saveBook(book).subscribe(() => {
      this.bookForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
