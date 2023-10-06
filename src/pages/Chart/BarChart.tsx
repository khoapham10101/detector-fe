import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import CustomTooltip from '../Components/Tooltip/CustomTooltip'

interface BarChartProps {
  data: any[];
  yAxis: string;
}

const renderLegendText = (value, entry) => {
  return <span>{value}</span>
}

const BarChart: React.FC<BarChartProps> = ({ data, yAxis }) => {
  if (data.length === 0) {
    return <div>No data available!</div>
  }
  return (
    <ResponsiveContainer width='100%' height='40%' aspect={2}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey={yAxis} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={renderLegendText} />
        <Bar dataKey='column_number_1' barSize={500} fill='#413ea0' />
        <Line type='monotone' dataKey='column_number_1' stroke='#ff7300' />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default BarChart
