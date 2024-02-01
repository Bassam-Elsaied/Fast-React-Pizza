
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
   const username = useSelector(state => state.user.username)

   const cart = useSelector(getCart)

   const dispatch = useDispatch()


   function handleClear(){
    dispatch(clearItem())
   }

   if(!cart.length) return <EmptyCart />

  return (
    <div className='py-3 px-4'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='text-xl mt-6 font-semibold'>Your cart, {username}</h2>

      <ul className='my-6 divide-y divide-stone-300 border-b border-stone-300'>{cart.map(item => <CartItem item={item} key={item.pizzaId} />)}</ul>
      <div className='space-x-2 text-center'>
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type='secandery' onClick={handleClear}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
