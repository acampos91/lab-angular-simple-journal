import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: 'journal/:id', component: JournalDetailsComponent },
    { path: '**', redirectTo: '' }
];
