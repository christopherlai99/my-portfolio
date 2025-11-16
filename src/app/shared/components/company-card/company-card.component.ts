import { Component, Input, OnInit } from '@angular/core';
import { ICompanyProject } from '../../dtos/company-project';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() data: ICompanyProject[] = []
  constructor() { }

  ngOnInit() {
  }

}
