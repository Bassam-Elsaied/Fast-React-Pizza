import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex item-center justify-between gap-20 text-sm font-semibold">
        <p >
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
        <p className="text-sm text-stone-500 capitalize italic">{isLoadingIngredients ? "Loading...": ingredients.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
