import './index.css'

const EmotionCard = props => {
  const {emotionDetails, isHilighted} = props
  const {title, description, imageUrl, cardColor} = emotionDetails
  const hilightedEmotionTitle = isHilighted && 'hilighted-emotion-title'
  const hilightedEmotionDescription = isHilighted && 'hilighted-emotion-title'
  const hilightedEmotioCard = isHilighted && 'hilighted-emotion-card'
  return (
    <li
      className={`emotion-card ${hilightedEmotioCard}`}
      style={{backgroundColor: cardColor}}
    >
      <img src={imageUrl} className="emotion-image" alt="emotion" />
      <p className={`emotion-title ${hilightedEmotionTitle}`}>{title}</p>
      <p className={`emotion-description ${hilightedEmotionDescription}`}>
        {description}
      </p>
    </li>
  )
}

export default EmotionCard
