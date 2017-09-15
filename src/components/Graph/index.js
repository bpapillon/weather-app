// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import round from 'lodash/round';
import sum from 'lodash/sum';
import ReactHighcharts from 'react-highcharts';
// Internals
import './styles.css';


const Graph = ({ data, title }) => {
  const config = {
    title: {
      text: title,
    },
    series: [{ data }],
  };

  return (
    <div className="graph">
      <ReactHighcharts config={{ series: [{ data }] }} />
      <p>Average: {round(sum(data)/data.length)}</p>
    </div>
  );
};

Graph.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Graph;
