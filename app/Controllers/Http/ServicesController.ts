import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'

export default class ServicesController {
  public async index({}: HttpContextContract) {
    const services = await Service.all()
    return services
  }

  public async show({ params }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    return service
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['userId', 'orderId', 'name', 'price'])
    const service = await Service.create(data)
    return service
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['userId', 'orderId', 'name', 'price'])
    const service = await Service.findOrFail(params.id)
    service.merge(data)
    await service.save()
    return service
  }

  public async destroy({ params }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    await service.delete()
    return {
      message: 'Service deleted successfully',
    }
  }
}
