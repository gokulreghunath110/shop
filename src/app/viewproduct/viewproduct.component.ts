import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private api:ApiService) { this.datafromApi()}

  datafromApi=()=>{
    this.api.fetchproduct().subscribe(
    (Response)=>{
      this.products=Response
    }
    )
  }


  products:any=[ ]
  

  

  ngOnInit(): void {
  }

}
