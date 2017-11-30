import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {
journal:any;
  constructor( public router:Router,
      public journalService:JournalService,
      public route:ActivatedRoute) {
      route.params.subscribe(params => {
        this.journalService.getJournalByID(params['id'])
          .subscribe(journal => this.journal = journal);
      })
    }

  ngOnInit() {
  }

}
