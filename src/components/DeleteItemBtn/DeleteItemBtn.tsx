import * as React from 'react';
import './DeleteItemBtn.css';

interface Props {
    onDeleteItem: () => void,
}

const DeleteItemBtn: React.FC<Props> = ({onDeleteItem}) => {
    return (
        <button type='button' className='delete-item-btn' onClick={onDeleteItem}>
            ×
        </button>
    );
};

export default DeleteItemBtn;