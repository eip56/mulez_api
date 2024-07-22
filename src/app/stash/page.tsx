import { getProducts } from '../../../_actions/productActions'

export default async function Stash() {
  const res = await getProducts()
  console.log(res)

  return (
    <div>
      <h1>Stash</h1>
    </div>
  )
}
