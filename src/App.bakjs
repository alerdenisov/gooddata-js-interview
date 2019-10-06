// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import { format } from 'date-fns'
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {
  months = [
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
    "December",
  ]

  constructor() {
    super();
    this.state = {
      month: 0,
      year: 2016
    }
  }

  getStartDate() {
    return format(new Date(this.state.year, this.state.month, 1), "yyyy-MM-dd")
  }
  
  getEndDate() {
    return format(new Date(this.state.year, this.state.month + 1, 0), "yyyy-MM-dd")
  }

  getMonthFilter() {
    return {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute
        },
        from: this.getStartDate(),
        to: this.getEndDate()
      }

    }
  }

  getMeasures() {
    return [
      {
        measure: {
          localIdentifier: 'm1',
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure
              }
            }
          },
          alias: '$ Gross Profit'
        }
      }
    ]
  }

  getViewBy() {
    return {
      visualizationAttribute:
      {
        displayForm: {
          uri: dateAttributeInMonths
        },
        localIdentifier: 'a1'
      }
    }
  }

  handleMonthSelection(evt) {
    this.setState({
      month: parseInt(evt.target.value)
    });
  }
  
  handleYearSelection(evt) {
    this.setState({
      year: parseInt(evt.target.value)
    });
  }

  renderMonthSelection() {
    return (
      <select value={this.state.month} onChange={this.handleMonthSelection.bind(this)}>
        {this.months.map((name, index) => <option value={index} key={index}>{name}</option>)}
      </select>
    )
  }
  renderYearSelection() {
    const now = new Date().getFullYear()
    return (
      <select value={this.state.year} onChange={this.handleYearSelection.bind(this)}>
        {Array(10).fill(0).map((_, index) => <option value={now - index} key={index}>{now - index}</option>)}
      </select>
    )
  }

  render() {
    const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
    const filters = [this.getMonthFilter()];
    console.log(filters)
    const measures = this.getMeasures();
    const viewBy = this.getViewBy();

    return (
      <div className="App">
        <h1>$ Gross Profit in month {this.renderMonthSelection()} {this.renderYearSelection()}</h1>
        <div>
          <ColumnChart
            measures={measures}
            filters={filters}
            projectId={projectId}
          />
        </div>
        <h1>$ Gross Profit - All months</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={projectId}
          />
        </div>
      </div>
    );
  }
}

export default App;
