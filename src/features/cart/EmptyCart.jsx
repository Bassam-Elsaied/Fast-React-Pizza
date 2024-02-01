
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-6 px-4'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <p className='mt-4 bg-red-200 text-red-700 px-3 py-2 w-fit rounded-md font-semibold'>Your cart is still empty. Start adding some pizzas 🛒</p>
    </div>
  );
}

export default EmptyCart;
