/**
 * SRP - Single Responsability Principle
 *
 * Uma classe deve ter apenas uma responsabilidade.
 */

import { Order } from "./entities/order"
import { Product } from "./entities/product"
import { ShoppingCart } from "./entities/shopping-cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"

export const shoppingCart = new ShoppingCart()
export const messaging = new Messaging()
export const persistency = new Persistency()
export const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 25.9))
shoppingCart.addItem(new Product('Lápis', 3.9))

console.log(shoppingCart.items)
console.log(shoppingCart.total())

console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
