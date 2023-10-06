import axios from 'axios'
import BarChartVersion1 from '../Chart/BarChartVersion1'
import BarChartVersion2 from '../Chart/BarChartVersion2'

export default function Home() {
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    axios.get('http://detector.com:8071/api/v1/crawl').then((response) => {
      console.log('====================================')
      console.log('response', response)
      console.log('====================================')
    })
  }

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5  lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4 justify-center'>
            <form className='p-10 rounded bg-white shadow-sm' noValidate onSubmit={onSubmit}>
              <div className='text-2xl'>Input Text Field</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
                  placeholder='Email...'
                />
              </div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
                  placeholder='Email...'
                />
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full  py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='lg:col-span-5 lg:col-start-1 justify-center'>
            <BarChartVersion1 />
            <BarChartVersion2 />
          </div>
        </div>
      </div>
    </div>
  )
}
