import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'src/app/shared/models/email.model';
import { EmailsService } from 'src/app/shared/services/emails.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.page.html',
  styleUrls: ['./mail-detail.page.scss'],
})
export class MailDetailPage implements OnInit {
  email: Email;

  constructor(
    private emailsService: EmailsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = +this.router.snapshot.paramMap.get('id');
    this.email = this.emailsService.getEmail(id);
  }
}
