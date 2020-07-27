import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import {ContactService} from "./contact details/contact.service";
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    AddcontactsComponent,
    EditcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
