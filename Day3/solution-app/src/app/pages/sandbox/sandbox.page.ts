import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage {

  public upVotes = 0;

  public downVotes = 0;

  public isExpanded = false;

  public get votesAverage(): number {

    if (this.upVotes + this.downVotes) {
      return this.upVotes * 10 / (this.upVotes + this.downVotes);
    } else {
      return 0;
    }
  }

  constructor() {

  }

  public upVote(): void {

    this.upVotes++;
  }

  public downVote(): void {

    this.downVotes++;
  }

  public toggleExpand(): void {

    this.isExpanded = !this.isExpanded;
  }
}
