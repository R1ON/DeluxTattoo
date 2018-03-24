import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

import TooltipContent from './TooltipContent';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class MainComponent extends Component {
  render() {
    return (
      <section>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={80}
            fill="#8884d8"
          >
            {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip content={<TooltipContent />} />
        </PieChart>
      </section>
    );
  }
}

// HeaderComponent.propTypes = {
// };

export default MainComponent;
