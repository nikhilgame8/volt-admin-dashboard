import { Column } from '@ant-design/plots';

const ColumnPlot = () => {
  const data = [
    {
      type: '1995',
      sales: 38,
    },
    {
      type: '1992',
      sales: 52,
    },
    {
      type: '1982',
      sales: 61,
    },
    {
      type: '1983',
      sales: 145,
    },
    {
      type: '1994',
      sales: 48,
    },
    {
      type: '1999',
      sales: 38,
    },
    {
      type: '1998',
      sales: 38,
    },
    {
      type: '1997',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'category',
      },
      sales: {
        alias: 'sales',
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnPlot