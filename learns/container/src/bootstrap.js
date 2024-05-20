import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

console.log("Container!");
mount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
