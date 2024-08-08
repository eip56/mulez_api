'use client'
import TextField from '@/components/TextField/TextField'
import Select from '@/components/Select/Select'
// import { createVendor } from '../../../../_actions/vendorActions'

// @todo add addresses multiple with primary
// @todo add phone number field
// @todo add active field

const types = [
  { label: 'Cannabis Retailer', value: 0 },
  { label: 'Cannabis Prooducer', value: 1 },
  { label: 'Cannabis Manufacturer', value: 2 },
  { label: 'Cannabis Courier', value: 3 },
  { label: 'Cannabis Consumption Area', value: 4 },
  { label: 'Cannabis Producer Microbusiness', value: 5 },
  { label: 'Cannabis Research Laboratory', value: 6 },
  { label: 'Cannabis Testing Laboratory', value: 7 },
  { label: 'Integrated Cannabis Microbusiness (MICB)', value: 8 },
  { label: 'Certically Integrated Cannabis Establishment (VICE)', value: 9 }
]

export default function CreateVendor() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    // createVendor(data)
  }

  return (
    <div className="p-8">
      <h1>Create Vendor Form</h1>
      <form className="grid max-w-xl grid-rows-10 gap-4" onSubmit={handleSubmit}>
        <div>
          <TextField label="Company name" type="text" name="name" />
        </div>
        <div>
          <TextField label="Slug" type="text" name="slug" />
        </div>
        <div>
          <TextField label="Website URI" type="text" name="website" />
        </div>
        <div>
          <TextField label="Licence number" type="text" name="license" />
        </div>
        <div>
          <TextField label="Tap Identifier" type="text" name="tap" />
        </div>
        <div>
          <Select label="Vendor Type" name="type" options={types} />
        </div>
        <div>
          <TextField label="Contact name" type="text" name="contact" />
        </div>
        <div>
          <TextField label="Contact email" type="email" name="email" />
        </div>
        <div>
          <TextField label="Contact phone" type="tel" name="phone" />
        </div>
        <div className="mt-8 text-right">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">Create Vendor</button>
        </div>
      </form>
    </div>
  )
}
