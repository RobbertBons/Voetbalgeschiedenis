import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 id: any;

  constructor(private data: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.id= params['details']);
  }


  ngOnInit(): void {
    this.data.getMatches().subscribe((data: any) => {
      return this.id = data;
    })
  }

}
