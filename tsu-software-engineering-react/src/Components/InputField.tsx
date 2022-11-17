import React from 'react'
import './styles.css'

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
}

const InputFeild = ({todo, setTodo}: Props) => {
    return (
        <form className='input'>
            {/* Text inside search bar */}
            <input type='input' placeholder="Enter Client Name, State, or Phone Number" className="input_box" />
            {/* Enter button */}
            <button className='input_submit' type='submit'>
                Enter
            </button>

        </form>
    );
};

export default InputFeild
