import React, { Component } from "react";
import Layout, { Visualizer } from '../components/Layout';
import PropTypes from "prop-types";
import { ColumnChart, Model } from '@gooddata/react-components';

import DateFilter from '../utils/DateFilter';

export default class GrossProfit extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    const grossProfitMeasure = `/gdc/md/${props.projectId}/obj/6877`;
    const dateAttributeInMonths = `/gdc/md/${props.projectId}/obj/2142`;
    const dateAttribute = `/gdc/md/${props.projectId}/obj/2180`;
    
    this.state = {
      grossProfitMeasure,
      dateAttribute,
      dateAttributeInMonths,
      viewBy: Model.attribute(dateAttributeInMonths),
      measures: [
        Model.measure(grossProfitMeasure).alias("Gross Profit")
      ],
      filters: []
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  onChangeFilters(period) {
    console.log(period, Model.absoluteDateFilter(this.state.dateAttribute, period.from, period.to))
    this.setState({
      filters: [
        Model.absoluteDateFilter(this.state.dateAttribute, period.from, period.to)
      ]
    })
  }

  render() {
    const {
      projectId
    } = this.props;

    const {
      measures,
      viewBy,
      filters
    } = this.state;

    const sidebar = <DateFilter onChange={this.onChangeFilters.bind(this)} />

    return <Layout sidebar={sidebar}>
      <Visualizer>
        <ColumnChart
          measures={measures}
          filters={filters}
          viewBy={viewBy}
          projectId={projectId}
        />
      </Visualizer>
      <Visualizer>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </Visualizer>
    </Layout>
  }
}

GrossProfit.propTypes = {
  projectId: PropTypes.string.isRequired
}