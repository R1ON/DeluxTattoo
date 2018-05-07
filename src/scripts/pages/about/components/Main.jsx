import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

import TooltipContent from './TooltipContent';

import { PIE_COLORS, PIE_INFO } from '../constants/about';

class MainComponent extends Component {
  render() {
    const { masters } = this.props;

    const allWorks = masters.reduce((acc, current) => acc += current.value, 0);

    return (
      <section>
        <PieChart className="pie-chart" width={PIE_INFO.pieWidth} height={PIE_INFO.pieHeight} onMouseEnter={this.onPieEnter}>
          <Pie
            dataKey="value"
            data={masters}
            outerRadius={PIE_INFO.pieRadius}
          >
            {masters.map((entry, index) => <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />)}
          </Pie>
          <Tooltip content={<TooltipContent />} />
        </PieChart>

        <div className="about-masters-info">
          {masters.map(master => (
            <div key={master.id}>
              <div>{master.name}</div>
              <div>Всего работ: {((master.value * 100) / allWorks).toFixed(0)} %</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

MainComponent.propTypes = {
  masters: PropTypes.array.isRequired
};

export default MainComponent;

