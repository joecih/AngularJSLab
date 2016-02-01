import {Component} from 'angular2/core';

interface IListItem {
    name: string;
    purchased: boolean;
}

@Component({
    selector: "shopping-list",
    templateUrl: "ShoppingList.html"
})
export class ShoppingList {

    list: IListItem[];

    constructor() {
        this.list = [{
            name: "Apples",
            purchased: false
        }, {
            name: "Oranges",
            purchased: true
        }];        
    }
}