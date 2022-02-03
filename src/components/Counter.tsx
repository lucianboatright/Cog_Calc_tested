import React, {Component} from 'react';

export type CounterProps = { label?: string};

export class RearCounter extends Component<RearCounterProps, RearCounterState> {
    state: RearCounterState = {
        count: 15,
    }
    render() {
        const {label = "Count"} = this.props;
        return (
            <div>
                <div data-testid="counter-label">{label}</div>
                <div data-testid="counter">{this.state.count}</div>
            </div>
        )
    }
}