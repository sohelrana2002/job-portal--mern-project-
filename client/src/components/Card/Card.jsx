import { NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdWatchLater } from "react-icons/md";
import { PiCurrencyDollar } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import './Card.css'

const Card = ({cardData}) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = cardData;
  return (
    <div className='card'>
        <NavLink>
          <img src={companyLogo} className='card__logo' alt="logo" />

          <div className="card__details">
            <div>
            <h3>{jobTitle}</h3>
            <h1>{companyName}</h1>
            </div>

            <div className="contact__card">
              <div>
                <CiLocationOn />
                <p>{jobLocation}</p>
              </div>
              <div>
                <MdWatchLater />
                <p>{employmentType}</p>
              </div>
              <div>
                <PiCurrencyDollar />
                <p>{minPrice} - {maxPrice}k</p>
              </div>
              <div>
                <CiCalendar />
                <p>{postingDate}</p>
              </div>
            </div>

            <div className="des">
              {description}
            </div>
          </div>
        </NavLink>
    </div>
  )
}

export default Card