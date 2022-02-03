import React, {Component} from 'react';

export type CounterProps = { label?: string};

export class Counter extends Component {
    render() {
        const {label = "Count"} = this.props;
        return (
            <div>
                <div data-testid="counter-label">{label}</div>
                <div data-testid="counter"></div>
            </div>
        )
    }
}