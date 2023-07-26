import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({}: HttpContextContract) {
    const orders = await Order.all()
    return orders
  }

  public async show({ params }: HttpContextContract) {
    const order = await Order.findOrFail(params.id)
    return order
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['userId', 'serviceId', 'quantity', 'totalPrice'])
    const order = await Order.create(data)
    return order
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['userId', 'serviceId', 'quantity', 'totalPrice'])
    const order = await Order.findOrFail(params.id)
    order.merge(data)
    await order.save()
    return order
  }

  public async destroy({ params }: HttpContextContract) {
    const order = await Order.findOrFail(params.id)
    await order.delete()
    return {
      message: 'Order deleted successfully',
    }
  }
}
