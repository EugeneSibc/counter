import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    isDisabled: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClick}
            disabled={props.isDisabled}>
            {props.name}
        </button>
    );
};

export default Button;