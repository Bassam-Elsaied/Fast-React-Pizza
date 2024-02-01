import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { useSelector } from "react-redux";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

   const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;


  function handleAddToCart(){
    const newItem = {
       pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut && 'grayscale opacity-70'}`} />
      <div className="flex flex-col grow">
        <p className=" font-semibold">{name}</p>
        <p className=" capitalize italic text-stone-600">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase text-stone-500 font-medium">Sold out</p>}
          {isInCart && <UpdateItemQuantity pizzaId={id} />}
          {!soldOut && !isInCart && <Button type='small' onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
