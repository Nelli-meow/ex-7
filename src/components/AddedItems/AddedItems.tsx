import * as React from 'react';
import './AddedItems.css';
import DeleteItemBtn from "../DeleteItemBtn/DeleteItemBtn.tsx";

interface Props {
    itemName: string;
    itemPrice: number;
    itemAmount: number;
    totalPrice: number;
    removeItem: () => void;
    key?: number;
}

const AddedItems: React.FC<Props> = ({itemName, itemPrice, itemAmount, removeItem, key}) => {
    const totalItemPrice = itemPrice * itemAmount;
    return (
        <div className="added-item">
            <h3 className="item-title">{itemName}</h3>
            <span className="item-ammount">× {itemAmount}</span>
            <span className="item-price">{totalItemPrice} KGS</span>
            <DeleteItemBtn onDeleteItem={removeItem}/>
        </div>
    );
};

export default AddedItems;