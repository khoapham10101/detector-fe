import html2canvas from 'html2canvas'

const downloadChart = async () => {
  const chartContainer = document.getElementById('downloadChart')

  const canvas = await html2canvas(chartContainer)

  const imgURL = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.href = imgURL

  link.download = 'chart.png'
  link.target = '_blank'

  link.click()
}

export default downloadChart
