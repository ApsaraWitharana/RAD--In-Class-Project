export class Item {
    name: string;
    price: string;
    qty: number;
    total: number;

    constructor(name: string, price: string, qty: number, total: number) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.total = total;
    }
}
