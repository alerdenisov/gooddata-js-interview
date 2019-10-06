import React, { Component } from "react";
import PropTypes from "prop-types";
import { format, compareAsc } from 'date-fns'
import { Select, SelectionGroup } from '../components/Common'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const year = new Date().getFullYear();
const years = Array(10).fill(0).map((_, index) => year - index).reduce((dict, year) => (dict[year] = year, dict), {});

export default class DateFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: {
        month: 0,
        year: 2016
      },
      end: {
        month: 0,
        year: 2017
      }
    }
  }

  getStartDate() {
    return new Date(this.state.start.year, this.state.start.month, 1)
  }

  getEndDate() {
    return new Date(this.state.end.year, this.state.end.month, 1)
  }

  changeMonth(when) {
    return evt => this.setState({
      [when]: {
        ...this.state[when],
        month: parseInt(evt.target.value)
      }
    }, this.normalizeAndEmit.bind(this))
  }

  changeYear(when) {
    return evt => this.setState({
      [when]: {
        ...this.state[when],
        year: parseInt(evt.target.value)
      }
    }, this.normalizeAndEmit.bind(this))
  }

  normalizeAndEmit() {
    console.log('compare', compareAsc(this.getEndDate(), this.getStartDate()))
    if (compareAsc(this.getEndDate(), this.getStartDate()) < 0) {
      this.setState({
        end: {
          ...this.state.start
        }
      }, this.normalizeAndEmit.bind(this))
    } else {
      this.emitFilter()
    }
  }

  emitFilter() {
    this.props.onChange({
      from: format(this.getStartDate(), "yyyy-MM-dd"),
      to: format(this.getEndDate(), "yyyy-MM-dd")
    })
  }

  componentDidMount() {
    this.emitFilter()
  }

  render() {
    return <div>
      <div>
        <h4>From:</h4>
        <SelectionGroup>
          <Select options={months} value={this.state.start.month} onChange={this.changeMonth('start')} />
          <Select options={years} value={this.state.start.year} onChange={this.changeYear('start')} />
        </SelectionGroup>
      </div>
      <div>
        <h4>To:</h4>
        <SelectionGroup>
          <Select options={months} value={this.state.end.month} onChange={this.changeMonth('end')} />
          <Select options={years} value={this.state.end.year} onChange={this.changeYear('end')} />
        </SelectionGroup>
      </div>
    </div>
  }
}

DateFilter.propTypes = {
  onChange: PropTypes.func.isRequired
}