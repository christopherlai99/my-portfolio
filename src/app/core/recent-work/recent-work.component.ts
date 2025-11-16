import { Component, Input, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/shared/services/github.service';
import { Octokit } from '@octokit/rest';
import { IGithubProject } from 'src/app/shared/dtos/github-project';
import { ICompanyProject } from 'src/app/shared/dtos/company-project';
import { MockdataService } from 'src/app/shared/services/mockdata.service';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss'],
})
export class RecentWorkComponent implements OnInit {
  @Input() spacing = "p-2 me-3 mb-3"
  data: IGithubProject[] = [];
  comData: ICompanyProject[] = [];
  isPersonalSelected: boolean = true;
  constructor(private githubService: GithubApiService, private mockDataSevice: MockdataService) {}

  async ngOnInit() {
    this.githubService.getReposFromUser('christopherlai99').then((x) => {
      this.data = x
    });
    this.comData = this.mockDataSevice.getCompanyProjectItems();
  }

  selectPersonal() {
    this.isPersonalSelected = true;
  }

  selectCompany() {
    this.isPersonalSelected = false;
  }
}
