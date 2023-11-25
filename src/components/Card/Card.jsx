

import './Card.css'

const Card = ({cardData}) => {
  return (
    <div>
        <h1>{cardData.jobTitle}</h1>
    </div>
  )
}

export default Card