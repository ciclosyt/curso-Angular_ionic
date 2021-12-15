import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/shared/models/email.model';
import { EmailsService } from 'src/app/shared/services/emails.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.page.html',
  styleUrls: ['./mail-list.page.scss'],
})
export class MailListPage implements OnInit {
  emails: Email[];

  constructor(private emailsService: EmailsService, private router: Router) {}

  ngOnInit(): void {
    this.emails = this.emailsService.getEmails();
  }
}
