import React from 'react';

import '../../../../styles/common/recharts.sass';

const TooltipContent = ({ payload }) => (
  <div className="recharts-tooltip">
    {payload.map(entry => (
      <li className="recharts-tooltip-item" key={`tooltip-item-${entry.payload.id}`} >
        <div className={`recharts-tooltip-item-name recharts-tooltip-item-name-${entry.payload.id}`}>{entry.name}</div>
        <div className="recharts-tooltip-item-value">Всего работ: {entry.value}</div>
        <div className="recharts-tooltip-item-value">Всего стилей: {entry.payload.stylesCount}</div>
      </li>
    ))}
  </div>
);

export default TooltipContent;
