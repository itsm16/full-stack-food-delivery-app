import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link, useNavigate } from 'react-router';
import { placeOrder } from '../../store/features/cartSlice';

function Cart() {
  const cartInfo = useSelector(state => state.cart);
  const addedItems = cartInfo.items;
  const userInfo = useSelector(state => state.user);
  const currentUser = userInfo.user;
  const currentUserId = userInfo.userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(addedItems);
    console.log(userInfo);
  }, [addedItems, userInfo]);

  return (
    <div className='h-[85vh] min-h-fit bg-white text-black grid grid-cols-1 md:grid-cols-2 z-0'>
      {
        (cartInfo.totalQuantity !== 0)
          ?
          <>
            <div className='md:p-5 p-2'>
              <div className="md:h-[82vh] min-h[75vh] overflow-x-auto">
                <table className="table table-sm">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addedItems.map(item => (
                      <CartItem key={item.id} id={item.id} itemName={item.itemName} quantity={item.quantity} price={item.price} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {
              (cartInfo.totalQuantity !== 0) &&
              <div className='md:grid-cols-2 hidden md:flex justify-center pt-14'>
                <div className='w-[70%] h-[70%] flex flex-col gap-6'>
                  <div className='text-xl'>Total items : {cartInfo.totalQuantity}</div>
                  <div className='flex flex-col text-3xl'>
                    <b>Total : </b>
                    <b>Rs{" "}{cartInfo.totalPrice}</b></div>


                  {!currentUser
                    ? <div className='font-bold w-fit' onClick={() => navigate("/login")}>
                      <button className='btn btn-primary text-lg' >Place Order</button>
                    </div>
                    : <div onClick={() => dispatch(placeOrder({addedItems, currentUser, currentUserId, totalAmount: cartInfo.totalPrice}))}
                    className='font-bold w-fit' >
                      <button className='btn btn-primary text-lg' >Place Order</button>
                    </div>
                  }


                </div>

              </div>
            }
          </>
          :
          <h1 className='justify-self-center text-black p-5 font-semibold text-xl col-span-2'>
            Your Cart is Empty...
          </h1>
      }

      {/* Sticky Footer */}
      <div className='md:hidden fixed bottom-0 z-10 border border-t bg-white border-gray-400 h-[120px] w-screen p-3 flex justify-between'>
        <div className='w-[50%] h-[90%] flex flex-col'>
          <b className='text-xl'>Total :</b>
          <b className='text-3xl'>Rs{" "}{cartInfo.totalQuantity !== 0 ? cartInfo.totalPrice : 0}</b>
        </div>
        <div className='flex flex-col w-[80%] gap-2 items-end'>
          <div className='flex justify-end'>Total Items : {cartInfo.totalQuantity}</div>
          {
            cartInfo.totalQuantity !== 0 && (currentUser !== null
              ? <button className='w-[80%] btn btn-primary btn-lg text-xl rounded-2xl'><Link to={"/login"}>Place Order</Link></button>
              : <button className='w-[80%] btn btn-primary btn-lg text-xl rounded-2xl' onClick={() => console.log()}>Place Order</button>)

          }
        </div>
      </div>
    </div>

  )
}

export default Cart
