import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JournalService} from '../services/journal.service';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { JournalDetailsComponent } from './journal-details/journal-details.component'

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    JournalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
