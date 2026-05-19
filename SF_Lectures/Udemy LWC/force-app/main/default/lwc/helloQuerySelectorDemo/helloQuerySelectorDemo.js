import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ['John', 'Smith', 'Nick', 'Mike'];
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1'); //gets the data from the current template in the component and finds the H1
        elem.style.border="1px solid red";
        console.log(elem.innerText);

        const userElem = this.template.querySelectorAll('.name');
        Array.from(userElem).forEach(item =>{
            console.log(item.innerText);
            item.setAttribute('title', item.innerText);
        });


        //lwc:dom=manual demo
        const childElem = this.querySelector('.child');
        childElem.innerHTML = '<h1>Hey I am a child element </h1>';
    }
}