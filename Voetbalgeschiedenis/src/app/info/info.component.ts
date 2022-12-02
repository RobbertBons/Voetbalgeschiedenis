import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  year: any;

  constructor(private data: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.year = params['info']);
  }

  ngOnInit(): void {

    this.data.GetYear().subscribe((data: any) => this.year = data)
  }

}
