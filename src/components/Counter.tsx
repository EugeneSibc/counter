import React, { useState } from 'react';
import Button from './Button';

type CounterPropsType = {
    value: number
    increment: () => void
    reset: () => void
    maxValue: number
}

const Counter = (props: CounterPropsType) => {   

    

    return (
        <div>
            <div className='display'>
                <h1 className={props.value === props.maxValue ? "max-value" : ""}>{props.value}</h1>
            </div>
            <div className="button-block">
                <Button name="Inc"
                    isDisabled={props.value === props.maxValue}
                    onClick={props.increment} />
                <Button name="Reset"
                    isDisabled={props.value < 1}
                    onClick={props.reset} />
            </div>

        </div>
    );
};

export default Counter;