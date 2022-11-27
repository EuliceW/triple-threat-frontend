import React from 'react'
import './searchbox.css'

interface Props {
    searchInput: string;
    updateSearch: React.Dispatch<React.SetStateAction<string>>
}

const InputFeild = ({ searchInput, updateSearch }: Props) => {
    return (
        <form className='input'>
            {/* Text inside search bar */}
            <input type='input' placeholder="Enter Client Name, Inventory, or Storage Type.." className="input_box"
                value={searchInput}
                onChange={(e) => updateSearch(e.target.value)} />
        </form>
    );
};

export default InputFeild
