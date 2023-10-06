import styles from './CustomTooltip.module.css'

const isUrl = (str: string) => {
  try {
    new URL(`https:{str}`)
    return true
  } catch (e) {
    return false
  }
}

const CustomTooltip = ({ active, payload, label }: { active: boolean; payload: any[]; label: any }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className={styles.customTooltip}>
        {Object.keys(data).map((key, index) => {
          const value = data[key]

          // Check if the key is an image source
          if (key.startsWith('src_')) {
            return (
              <p key={index}>
                <strong>{key.replace('src_', '')}:</strong>{' '}
                <img style={{ verticalAlign: 'middle', display: 'inline-block' }} src={value} alt={key} />
              </p>
            )
          }

          // Check if the key is a number
          if (key.startsWith('column_number_')) {
            return null // Skip this, or handle it differently if you want
          }

          return (
            <p key={index}>
              <strong>{key.replace('column_', '')}:</strong> {value ?? '-'}
            </p>
          )
        })}
      </div>
    )
  }
  return null
}
export default CustomTooltip
