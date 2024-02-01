// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from './OrderItem'
import { useEffect } from "react";



function Order() {

  const order = useLoaderData()

  const fetcher = useFetcher();

  useEffect(
    function()
    {
      if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    }
    ,[fetcher])

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-2 ">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 text-red-50 px-3 py-1 text-sm font-semibold uppercase tracking-wide rounded-full">Priority</span>}
          <span  className="bg-green-500 text-green-50 px-3 py-1 text-sm font-semibold uppercase tracking-wide rounded-full">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 px-4 py-6 bg-stone-300">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-300 border-b-2 border-stone-300 ">
        {cart.map(item => <OrderItem item={item}  key={item.id} isLoadingIngredients={fetcher.state === 'loading'} ingredients={fetcher?.data?.find(el=> el.id === item.pizzaId).ingredients ?? []}/>)}
      </ul>

      <div className="bg-stone-300 space-y-2 px-5 py-6 text-center">
        <p className="font-medium text-sm text-stone-700">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="font-medium text-sm text-stone-700">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){
  const order = getOrder(params.orderId);
  return order
} 

export default Order;
