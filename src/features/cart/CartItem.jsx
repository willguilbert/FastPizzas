import { formatCurrency } from '../../utils/helpers'
import Button from '../../ui/Button'
import DeleteItem from './DeleteItem'
import UpdateItemQty from './UpdateItemQty'
import { useSelector } from 'react-redux'
import { getCurrentQtyById } from './cartSlice'
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item
  const currQty = useSelector(getCurrentQtyById(pizzaId))
  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty currQty={currQty} pizzaId={pizzaId}></UpdateItemQty>
        <DeleteItem pizzaId={pizzaId} type="small">
          Delete
        </DeleteItem>
      </div>
    </li>
  )
}

export default CartItem
