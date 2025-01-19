import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, increaseItem } from '../../store/features/cartSlice';

function CartItem({ id, itemName, price, quantity }) {
    const dispatch = useDispatch();

    return (
        <tr key={id}>
            <td>{itemName}</td>
            <td>{price}</td>
            <td className='flex items-center'>

                {quantity > 1
                    ?
                    <td className='flex flex-col'>
                        <td onClick={()=>dispatch(increaseItem({id}))}
                        className='btn btn-xs text-lg p-0 text-white'>+</td>
                        <td className=''>{quantity}</td>
                        <td className='btn btn-xs text-lg p-0 text-white'>-</td>
                    </td>
                    : <td>{quantity}</td>
                }
            </td>
            <td>
                <button onClick={() => dispatch(deleteItem({ id}))} className="btn btn-primary btn-sm">x</button>
            </td>
        </tr>
    );
}

export default CartItem;
