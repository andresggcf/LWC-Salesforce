import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    //Lecture 33: Properties and Data Binding
    //Properties: they are only available on the current class
    name;
    age = 30;



    //types of properties: 
    //Undefined:
    noValue;

    //Defined:
    fullname = 'Salesforce'; //to bind to HTML => <h1>My name is {fullname}</h1>
    userList = ['A', 'B'];



    //Data binding Demo:
    testName = 'Zero to Hero';
    testObj={
        Name:"Asdf"
    };
}