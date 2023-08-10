/**
 * OCP - Open Closed Principle
 *
 * Entidades devem estar abertas para extensão, mas fechadas para modificação.
 */

import { FiftyPercentDiscount } from "./classes/discount"
import { Order } from "./classes/order"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"

const fiftyPercentDiscount = new FiftyPercentDiscount()

export const shoppingCart = new ShoppingCart(fiftyPercentDiscount)

const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 25.9))
shoppingCart.addItem(new Product('Lápis', 3.9))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())

console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
