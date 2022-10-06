import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {
    carList=['Ford', 'Mercedes','Toyota', 'Audi'];

    ceoList = [
        {
            id:88362,
            company:"Google",
            name:"Sundar Pichay"
        },
        {
            id:23094,
            company:"Apple",
            name:"Tim Cook"
        },
        {
            id:559948,
            company:"Facebook",
            name:"Mark Zukerberg"
        },
        {
            id:559948,
            company:"Amazon",
            name:"Jeff Bezos"
        }
    ]

    carList2 = [
        {
            id:563713,
            brand:"Ford",
            name:"Fiesta"
        },
        {
            id:780493,
            brand:"Chevrolet",
            name:"Spark GT"
        },
        {
            id:9894930,
            brand:"Kia",
            name:"Cerato"
        },
        {
            id:3232566,
            brand:"Renault",
            name:"Duster"
        }
    ]
}