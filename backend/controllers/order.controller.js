import Order from "../models/order.model.js"
import Cart from "../models/cart.model.js"
import Product from "../models/product.model.js"

//Get all orders
// export const getOrders = async (request, response) => {
//     const orders = await Order.find()
//     if (!orders) return response.status(404).send({ error: "Something went wrong" })
//     response.status(200).send(orders)
// }
export const getOrders = async (request, response) => {
    try {
        const orders = await Order.find().populate('orderItems.productId', 'title'); // Yalnız məhsulun adını gətiririk
        if (!orders) return response.status(404).send({ error: "Something went wrong" });
        response.status(200).send(orders);
    } catch (error) {
        return response.status(500).send({ error: "Server error" });
    }
}


//get a single order
export const getSingleOrder = async (request, response) => {
    const { userId } = request.params
    const singleOrder = await Order.findOne({ userId })
    if (!singleOrder) return response.status(404).send({ error: "Something went wrong" })
    response.status(200).send(singleOrder)
}

//add a single Order
export const addOrder = async (request, response) => {
    console.log(request);
    const { _id: userId,email:email } = request.user
    const {  orderItems, shippingAddress } = request.body
    let totalPrice = 0;



    
    
    //check empty values
    for (const value of Object.values(shippingAddress)) {
        if (!value) {
            return response.status(400).send({ error: "Please provide a required fields" })
        }
    }
    const orderItemsWithAddress = orderItems.map((orderItem) => {
        totalPrice += orderItem.quantity * orderItem.price;
        return { ...orderItem, shippingAddress }
    })
    const newOrder = await Order.create({ orderItems: orderItemsWithAddress, totalPrice, userId,email })

    if (!newOrder) return response.status(400).send({ error: "Could not create a new Order" })

    const userCart = await Cart.findOne({ userId })
    if (!userCart) return response.status(404).send({ error: "Something went wrong" })

    userCart.cartItems = []
    await userCart.save()

    const products = await Product.find()

    for (const orderItem of orderItems) {
        const { color: colorId, size: sizeId, productId, quantity } = orderItem
        const product = products.find((product) =>
            product._id.toString() === productId.toString()
        )

        if (product) {
            const stockItem = product.stock.find((stockItem) =>
                stockItem.color.toString() === colorId.toString() &&
                stockItem.size.toString() === sizeId.toString()
            )
            if (stockItem) {
                if (quantity > stockItem.quantity) {
                    return response.status(400).send({ error: "Invalid quantity" })
                }
                stockItem.quantity = stockItem.quantity - quantity
                await product.save()
            }
        }

    }
    response.status(201).send(newOrder)
}