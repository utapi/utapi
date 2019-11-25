export class ProductDetail{
    ProductID: String
    ProductName: String
    ProductImg: String
    ProductDesc: String
    ProductPrice: Number
    ProductNumber: Number
    ClassID: String

    constructor(init?: Partial<ProductDetail>) {
        Object.assign(this, init);
    }
}

export class ProductClass{
    ClassID: String
    ClassName: String
    
    constructor(init?: Partial<ProductClass>) {
        Object.assign(this, init);
    }
}

export class ShoppingCart {
    ProductID: String
    ProductNumber: Number
    UserID: String
    
    constructor(init?: Partial<ShoppingCart>) {
        Object.assign(this, init);
    }
}
