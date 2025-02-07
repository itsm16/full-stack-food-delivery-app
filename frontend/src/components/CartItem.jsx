import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseItem, deleteItem, increaseItem } from '../../store/features/cartSlice';

function CartItem({ id, itemName, price, quantity }) {
    const dispatch = useDispatch();

    return (
        <tr key={id}>
            <td>{itemName}</td>
            <td>{price}</td>
            <td className='flex items-center p-0'>
                <td className='flex flex-col'>
                    {(quantity > 1 || quantity == 1) && <td onClick={() => dispatch(increaseItem({ id, itemName, price }))}
                        className='btn btn-xs text-lg p-0 text-white'>+</td>}
                    <td className=''>{quantity}</td>
                    {(quantity > 1) && <td onClick={() => dispatch(decreaseItem({ id, itemName, price }))}
                        className='btn btn-xs text-lg p-0 text-white'>-</td>}
                </td>
            </td>
            <td>
                <button onClick={() => dispatch(deleteItem({ id, price, quantity }))} className="btn btn-primary btn-sm">x</button>
            </td>
        </tr>
    );
}

export default CartItem;
