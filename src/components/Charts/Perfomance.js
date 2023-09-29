import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const PerformanceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    legend: {
        marker:{symbol:"square"},
      position: 'top',
      offsetX: 8,
      title: {
        text: 'Product category (average sales volume)',
        spacing: 8,
      },
      itemValue: {
        formatter: (text, item) => {
          const items = data.filter((d) => d.type === item.value);
          return items.length ? items.reduce((a, b) => a + b.value, 0) / items.length : '-';
        },
        style: {
          opacity: 0.65,
        },
      },
    },
  };

  return <Column {...config} />;
};

export default PerformanceChart