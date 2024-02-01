import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { removeItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch()

  function handleRemove(){
    dispatch(removeItem(pizzaId))
  }

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-2 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <Button type='small' onClick={handleRemove}>Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
