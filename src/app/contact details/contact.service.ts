import { Contact } from "./contact";

export class ContactService{
    contacts: Contact[];
    constructor(){
        this.contacts = [];

        var contact1 = new Contact("S1mple", "Navi", "212-211-4686");
        this.contacts.push(contact1);
    }   

    getContacts():Contact[]{
        return this.contacts;
    }

    addContact(contact : Contact){
        this.contacts.push(contact);
    }
}