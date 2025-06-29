export interface CART_PRODUCT {
    id : number;
    title : string;
    quantity : number;
    price : number;
    thumbnail : string;
    stock : number;
}

export interface CartDocument extends CART_PRODUCT {
    userId : string;
    cartItems : CART_PRODUCT[];
}

export interface OrderDocument extends CART_PRODUCT{
    userId : string;
    orderItems : CART_PRODUCT[];
    totalPrice : number;
    address : {
        residentialDetails : string;
        street : string;
        landmark : string;
        city : string;
        state : string;
        pincode : string;
    }
}