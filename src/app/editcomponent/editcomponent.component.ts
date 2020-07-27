import { Component, OnInit} from '@angular/core';
import { Contact } from '../contact details/contact';
import { ContactService } from '../contact details/contact.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css']
})

export class EditcomponentComponent implements OnInit {
  contact:Contact;
  contacts:Contact[];
  constructor(private contactSer: ContactService, private matDialogRef: MatDialogRef<EditcomponentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contact = new Contact("", "","");
    this.contacts = this.contactSer.getContacts();
   }

  ngOnInit(): void {
  }

  onAdd(fname:string, lname:string, phoneno:string){
    // console.log(this.data);
    // this.contact.fname = fname;
    // this.contact.lname = lname;
    // this.contact.phoneno = phoneno;

    for(var item of this.contacts){
      if(item === this.data){
        item = this.data;
        item.fname = fname;
        item.lname = lname;
        item.phoneno = phoneno;
      }
    }

    // this.contact = new Contact("", "", "");
    this.matDialogRef.close();
  }
  
}

