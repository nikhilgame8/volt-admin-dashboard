import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
    const data = [{
            type: 'peanutbutter',
            value: 27,
        },
        {
            type: 'vanilla',
            value: 25,
        },
        {
            type: 'butterskotch',
            value: 18,
        },
        {
            type: 'coffee',
            value: 15,
        },
        // {
        //   type: 'butterunder',
        //   value: 10,
        // },
        // {
        //   type: 'chocolate',
        //   value: 5,
        // },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.60,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [{
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config }
    />;
};

export default PieChart