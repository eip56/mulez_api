'use server'
import Vendor from '../models/vendors'

export async function getVendors() {
  try {
    const vendors = await Vendor.find()
    return { msg: 'GET', vendors }
  } catch (error: any) {
    return { errMsg: error.message }
  }
}

// export async function createVendor(props) {
//   try {
//     await connectDB()

//     // const vendor = new Vendor({
//     //   name: props.name,
//     //   slug: props.slug,
//     //   website: props.website,
//     //   license: props.license,
//     //   tap: props.tap,
//     //   type: props.type,
//     //   contact: props.contact,
//     //   email: props.email,
//     //   phone: props.phone,
//     // })

//     // const newVendor = await vendor.save()

//     console.log(props)

//     // const vendors = await VendorModel.find()
//     //return { msg: 'Vendor Saved', newVendor }
//   } catch (error: any) {
//     return { errMsg: error.message }
//   }

//   // connectDB()
//   // const products = await ProductModel.find()
//   // return products
// }
