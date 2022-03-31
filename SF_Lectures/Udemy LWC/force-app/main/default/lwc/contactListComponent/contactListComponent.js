import { LightningElement, track, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactListController.getContactList';

const contColumns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
]
export default class ContactListComponent extends LightningElement {
    @api recordId;
    //error;
    columns = contColumns;
    //@track conList;

    @wire (getContactList, {recordId: '$recordId'}) contactList;
    /*@wire (getContactList, {recordId: '$recordId'}) contactList(data,error){
        if(data){
            this.conList = data;
            console.log("Data: " + data);
        }
        else if (error){
            console.log("error: " + error);
        }
    }*/
}