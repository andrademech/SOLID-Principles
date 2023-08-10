/**
 * DIP - Dependency Inversion Principle (Princípio da inversão de dependência)
 *
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
 *
 */

import { IndividualCustomer } from "./classes/customer"
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
const individualCustomer = new IndividualCustomer('Herberth', 'Andrade', '111.111.111-11')
const order = new Order(shoppingCart, messaging, persistency, individualCustomer)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 25.9))
shoppingCart.addItem(new Product('Lápis', 3.9))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())

console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
