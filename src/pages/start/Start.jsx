import React, { Component } from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


class Start extends Component {
    state = {}


    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    render() {
        return (
            <div>
                <DatePicker onChange={this.onChange} />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <WeekPicker onChange={this.onChange} placeholder="Select week" />
            </div>
            
        )
    }
}

export default Start;

