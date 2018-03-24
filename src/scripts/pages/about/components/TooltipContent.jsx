import React  from 'react';
import PropTypes from 'prop-types';

const TooltipContent = ({ payload }) => (
  <div>
    {payload.map((entry, index) => (
      <li className="recharts-tooltip-item" key={`tooltip-item-${index}`} >
        <span className="recharts-tooltip-item-name">{entry.name}</span>
        <span className="recharts-tooltip-item-value">{entry.value}</span>
      </li>
    ))}
  </div>
);

TooltipContent.propTypes = {
  payload: PropTypes.array
}

export default TooltipContent;
