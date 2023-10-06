import { useEffect, useState } from 'react'
import axios from 'axios'
import BarChart from '../Chart/BarChart'
import Loading from '../Components/Loading/Loading'
import downloadChart from '../Components/Download/DownloadChart'

export default function Home() {
  const [chartData, setChartData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [destination, setdestination] = useState('')
  const [yAxis, setYAxis] = useState('')
  const BE_API = 'http://localhost:8888'

  const fetchData = async (force = false) => {
    setIsLoading(true)
    try {
      const url = force ? BE_API + '/api/v1/crawl-force' : BE_API + '/api/v1/crawl'
      const response = await axios.post(url, { url: destination })
      setChartData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
      setChartData([])
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = (e) => {
    e?.preventDefault()
    fetchData()
  }

  const onForceSubmit = (e) => {
    e?.preventDefault()
    fetchData(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
        <div className='lg:col-span-2 lg:col-start-4 justify-center'>
          <input
            type='text'
            name='YAxis'
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
            className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm mt-4'
            placeholder='Header name...'
          />
          <input
            type='url'
            name='url'
            value={destination}
            onChange={(e) => setdestination(e.target.value)}
            className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm mt-4'
            placeholder='Url...'
          />
          <button
            className='w-full py-4 px-2 uppercase bg-red-500 mt-4 text-white text-sm hover:bg-red-600 flex justify-center items-center'
            onClick={onSubmit}
          >
            <Loading isLoading={isLoading} />
            Fetching Data
          </button>
          <button
            className='w-full py-4 px-2 uppercase bg-red-500 mt-4 mb-4 text-white text-sm hover:bg-red-600 flex justify-center items-center'
            onClick={onForceSubmit}
          >
            <Loading isLoading={isLoading} />
            Force Fetching Data
          </button>
          {chartData.length > 0 && (
            <button
              className='w-full py-4 px-2 uppercase bg-green-500 mt-4 mb-4 text-white text-sm hover:bg-green-600 flex justify-center items-center'
              onClick={downloadChart}
            >
              Download Chart
            </button>
          )}
        </div>

        <div className='lg:col-span-5 lg:col-start-1 justify-center border border-gray-300' id='downloadChart'>
          <BarChart data={chartData} yAxis={yAxis} />
        </div>
      </div>
    </div>
  )
}
