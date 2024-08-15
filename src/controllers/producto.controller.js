import Producto from '../models/Producto.js'

class ProductoController {
  static async index(req, res) {
    const productos = await Producto.find()
    res.json(productos)
  }

  static async find(req, res) {
    try {
      const { id } = req.params
      const producto = await Producto.findById(id)
      res.json(producto)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async create(req, res) {
    try {
      const nuevoProducto = new Producto(req.body)
      const productoGuardado = await nuevoProducto.save()
      res.status(201).json(productoGuardado)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params
      const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true })
      res.json(productoActualizado)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async partialUpdate(req, res) {
    try {
      const { id } = req.params
      const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true })
      res.json(productoActualizado)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params
      await Producto.findByIdAndDelete(id)
      res.json({ message: 'Producto eliminado' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default ProductoController
