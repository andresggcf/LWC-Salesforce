import { LightningElement, track} from 'lwc';

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
    title = 'aura'



    //Data binding Demo:
    testName = 'Zero to Hero';
    testObj={
        Name:'Asdf'
    };

    //Lecture 34: Methods and two way data binding

    //Method:
    changeHandler(event){ //event is a default object
        //Change name of title
        this.title = event.target.value; //target holds a value property of what the user typed in input 
    }

    //Lecture 35: @Track property
    //Define an object
    @track address = { //track is used to tell the framework to observe changes in the property of an object.s
        city: "Melbourne",
        postCode: 32398,
        country: "Australia"
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }

    /* Lecture 36: getter example*/
    users = ["John", "Smith","Nick"];
    num1 = 10;
    num2 = 20;

    //set getter
    get firstUser(){
        return this.users[0];
    }

    //multiply getter
    get multiply(){
        return this.num1 * this.num2;
    }


}