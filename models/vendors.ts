import { Schema, model, models } from 'mongoose'

const vendorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
    },
    license: {
      type: String,
      required: true,
    },
    tap: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const Vendor = models.Product || model('Vendor', vendorSchema)

export default Vendor
