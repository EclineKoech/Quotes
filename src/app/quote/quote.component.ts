import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  title = 'Quotes App';
  quotes: Quote[] = [
    new Quote(
      'Tech Quote',
      'Esme',
      'Matt Mullenweg',
      'Technology is best when it brings people together',
      0,
      0,
      new Date(2020, 6, 18)
    ),
    new Quote(
      'Tech Quote',
      'ecline',
      'Steve Jobs',
      'It is not by faith in technology but in people',
      0,
      0,
      new Date(2021, 6, 18)
    ),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].title}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
