import { Component, OnInit} from '@angular/core';
import { Contact } from '../contact details/contact';
import { ContactService } from '../contact details/contact.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})

export class AddcontactsComponent implements OnInit {
  contact:Contact;
  constructor(private contactSer: ContactService, private matDialogRef: MatDialogRef<AddcontactsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contact = new Contact("", "","");
   }

  ngOnInit(): void {
  }

  onAdd(fname:string, lname:string, phoneno:string){
    this.contact.fname = fname;
    this.contact.lname = lname;
    this.contact.phoneno = phoneno;
    this.contactSer.addContact(this.contact);
    this.contact = new Contact("", "", "");
    this.matDialogRef.close();
    this.matDialogRef.afterClosed().subscribe(() => {
      
    })
  }  
}
