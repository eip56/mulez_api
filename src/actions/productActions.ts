'use server'

import ProductModel from '../../models/products'

export async function getProducts() {
  try {
    const products = await ProductModel.find()
    return { msg: 'GET', products }
  } catch (error: any) {
    return { errMsg: error.message }
  }
}
