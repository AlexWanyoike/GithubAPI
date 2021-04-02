
import { QuoteformComponent } from './../quoteform/quoteform.component';


import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Quoteclass } from './../quoteclass';





@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {


  @Input() quote: Quoteclass| undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  
  
  
  
  
  

 
  ngOnInit(): void {
  }

}
