import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact details/contact.service';
import { Contact } from '../contact details/contact';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddcontactsComponent } from '../addcontacts/addcontacts.component';
import { EditcomponentComponent } from '../editcomponent/editcomponent.component';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})


export class PhonebookComponent implements OnInit {
  contacts: Contact[];
  matConfig:MatDialogConfig;
  searchByVal:string;
  sortBySomething:string;
  constructor(private contactsSer : ContactService, private matDialog: MatDialog) {
    this.contacts = contactsSer.getContacts();
    this.matConfig = new MatDialogConfig();
    this.searchByVal = "";
   }

  ngOnInit(): void {
  }

  openModal(){
    this.matConfig.disableClose = false;
    this.matConfig.id = "add-modal";
    this.matConfig.height = "40%";
    this.matConfig.width = "40%";
    this.matConfig.data = new Contact("", "", "");

    const modalDialog = this.matDialog.open(AddcontactsComponent, this.matConfig)
                        .afterClosed().subscribe(() => {
                          this.contacts = this.contactsSer.getContacts();
                          this.sortBy();
                        });
  }

  deleteRecord(contact:Contact){
    for (let idx = 0; idx < this.contacts.length; idx++) {
      if(contact === this.contacts[idx]){
        this.contacts.splice(idx, 1);
      }
    }
  }

  edit(contact: Contact){
    this.matConfig.disableClose = false;
    this.matConfig.id = "add-modal";
    this.matConfig.height = "40%";
    this.matConfig.width = "40%";

    this.matConfig.data = contact;

    this.matDialog.open(EditcomponentComponent, this.matConfig)
                  .afterClosed().subscribe(() => {
                    this.sortBy();
                  })
  }

  Search(){
    this.contacts = this.contactsSer.getContacts();
    if(this.searchByVal.length !== 0){
      this.contacts = this.contacts.filter(el => {
        var searchPattern = new RegExp(this.searchByVal.toLowerCase());
        return searchPattern.test((el.fname + el.lname).toLowerCase());
      })
    }
  }

  sortBy(){
    if(this.sortBySomething === "name"){
      this.contacts = this.contacts.sort((a:Contact, b:Contact) =>{
        if(a.fname.toLowerCase() < b.fname.toLowerCase()){
          return -1
        }
        if(a.fname.toLowerCase() > b.fname.toLowerCase()){
          return 1
        }
  
        if(a.fname.toLowerCase() === b.fname.toLowerCase()){
          return 0
        }
      });  
    }

    if(this.sortBySomething === "number"){
      this.contacts = this.contacts.sort((a:Contact, b:Contact) =>{
        if(a.phoneno.toLowerCase() < b.phoneno.toLowerCase()){
          return -1
        }
        if(a.phoneno.toLowerCase() > b.phoneno.toLowerCase()){
          return 1
        }
  
        if(a.phoneno.toLowerCase() === b.phoneno.toLowerCase()){
          return 0
        }
      });
    }
  }
}
