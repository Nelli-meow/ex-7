import * as React from 'react';
import './Items.css';

interface ItemProps {
    addItem: () => void;
    itemName: string;
    itemPrice: number;
    itemImage: string;
    key: number;
}

const Items: React.FC<ItemProps> = ({addItem, itemName, itemPrice, itemImage}) => {

    return (
        <button className="item" type="button" onClick={addItem}>
            <img src={itemImage} alt={itemName} className="item-img" />
            <h3 className="item-title">{itemName}</h3>
            <span className="item-price">Price: {itemPrice} KGS</span>
        </button>
    );
};

export default Items;