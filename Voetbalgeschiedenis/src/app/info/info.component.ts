import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  movies:any

  constructor(private data: JsonService) { }

  ngOnInit(): void {

    this.data.getInfo().subscribe(data => this.info = data)
  }

}
