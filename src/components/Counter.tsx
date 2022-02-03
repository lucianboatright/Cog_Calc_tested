import React, {Component} from 'react';

export type CounterProps = { 
    label?: string;
    start: number;
};

const initialState = {count: 0};
export type CounterState = Readonly<typeof initialState>;

export class RearCounter extends Component<RearCounterProps, RearCounterState> {
    readonly state: RearCounterState = initialState;

    componentDidMount() {
        if (this.props.start) {
            this.setState({
                count: this.props.start,
            });
        }
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