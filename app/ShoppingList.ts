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
    newItem: string;

    constructor() {
        this.list = [];        
    }
    
    toggleItem(item: IListItem): void {
        item.purchased = !item.purchased;
    }
    
    addItem(): void {
        this.list.push({
            name: this.newItem,
            purchased: false
        });
        this.newItem = '';
    }
 
}