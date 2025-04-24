
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { name: 'EHR Systems', value: 35, color: '#143151' },
  { name: 'PMS Solutions', value: 25, color: '#387E89' },
  { name: 'Telehealth', value: 15, color: '#5CA9AD' },
  { name: 'Calendar & Storage', value: 15, color: '#88BCBE' },
  { name: 'Email & CRM', value: 10, color: '#B1D1D3' },
];

const IntegrationChart = () => {
  const chartConfig = {
    'ehr': {
      label: 'EHR Systems',
      color: '#143151',
    },
    'pms': {
      label: 'PMS Solutions',
      color: '#387E89',
    },
    'tele': {
      label: 'Telehealth',
      color: '#5CA9AD',
    },
    'calendar': {
      label: 'Calendar & Storage',
      color: '#88BCBE',
    },
    'email': {
      label: 'Email & CRM',
      color: '#B1D1D3',
    },
  };

  return (
    <div className="w-full h-[300px] p-4">
      <ChartContainer config={chartConfig} className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip>
              <ChartTooltipContent />
            </ChartTooltip>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationChart;
