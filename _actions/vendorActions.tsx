'use server'
import Vendor from '../models/vendors'

export async function getVendors() {
  try {
    const vendors = await Vendor.find()
    return { vendors }
  } catch (error: any) {
    return { errMsg: error.message }
  }
}

export async function createVendor(formData: any) {
  try {
    const vendor = new Vendor({
      name: formData.name,
      slug: formData.slug,
      website: formData.website,
      license: formData.license,
      tap: formData.tap, //change to UBI
      type: formData.type,
      contact: formData.contact,
      email: formData.email,
      phone: formData.phone,
    })

    const newVendor = await vendor.save()
  } catch (error: any) {
    return { errMsg: error.message }
  }
}
