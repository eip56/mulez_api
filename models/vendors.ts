import { Schema, model, models } from 'mongoose'

const vendorSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companyMailingAddress: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    license: {
      type: String,
      required: true,
    },
    ubi: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
      },
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
      },
    },
  },
)

const Vendor = models.Vendor || model('Vendor', vendorSchema)

export default Vendor
