import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;

    handleClick(){  
        console.log('is visible: ' + this.isVisible);
        if(!this.isVisible){
            this.isVisible = true;
        } else {
            this.isVisible = false;
        }
    }

}