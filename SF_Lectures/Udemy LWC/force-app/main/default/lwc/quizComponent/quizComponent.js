import { LightningElement } from 'lwc';

export default class QuizComponent extends LightningElement {
    selected = {} //selected answers
    correctAnswers = 0;
    isSubmitted = false; //used to show result div
    quizQuestions = [
        {
            id : 'q1',
            question : 'Which one of the following is not a template loop?',
            answers : {
                a : 'for:each',
                b : 'iterator',
                c : 'map loop'
            },
            correctAnswer : 'c'
        },
        {
            id : 'q2',
            question : 'Which one of the following is invalid in the LWC folder?',
            answers : {
                a : '.svg',
                b : '.apex',
                c : '.js'
            },
            correctAnswer : 'b'
        },
        {
            id : 'q3',
            question : 'Which one of the following is not a directive?',
            answers : {
                a : 'for:each',
                b : 'if:true',
                c : '@track'
            },
            correctAnswer : 'c'
        }
    ];


    /**
     * Method used to disable submit button
     */
    get allNotSelected(){
        /**
        * Object.keys of selected returns an array of keys.
        * selected should have data at first
        */
        return !(Object.keys(this.selected).length === this.quizQuestions.length);
    }

    /* 
        Gets the total score and compares with amount of questions existing 
        in order to format the text.
    */
    get isTotalScore(){
        return `slds-text-heading_medium ${this.quizQuestions.length === this.correctAnswers ?
        'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    /**
     * ethod adds an answer selected to a map (Object)
     */
    clickHandler(event){
        /**
         * const name = event.target.name;
         * const value = event.target.value;
         */
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    }

    /**
     * Submits form
     */
    submitHandler(event){
        event.preventDefault() //prevents page reload

        /*
        filter goes through each item of quizQuestions
        item is an item of the quizQuestions object
        */
        let correct = this.quizQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    /**
     * Resets form
     */
    resetHandler(){
        this.selected={};
        this.correctAnswers = 0;
        this.isSubmitted=false;
    }
}