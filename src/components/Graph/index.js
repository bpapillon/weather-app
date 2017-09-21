// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import round from 'lodash/round';
import sum from 'lodash/sum';
// Internals
import './styles.css';

const Graph = ({ data, dataTimestamps, title, unit }) => {
  const config = {
    title: {
      text: title,
    },
    series: [{
      data,
      name: title,
    }],
    yAxis: {
      title: {
        text: unit,
      },
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: 'Hours:Minutes:Seconds'
      },
      categories: dataTimestamps,
      maxPadding: 0.05,
      showLastLabel: true,
    },
  };

  return (
    <div className="graph">
      <ReactHighcharts config={config} />
      <p>The average <strong>{title}</strong> is {round(sum(data)/data.length)} {unit}.</p>
    </div>
  );
};

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dataTimestamps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Graph;
