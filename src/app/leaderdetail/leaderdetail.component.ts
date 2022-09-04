import { Component, OnInit, Input } from '@angular/core';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss']
})
export class LeaderdetailComponent implements OnInit {
  @Input() leader!: Leader
  constructor() { }

  ngOnInit(): void {
  }

}
