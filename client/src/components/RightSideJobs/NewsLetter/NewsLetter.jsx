import { MdMarkEmailRead } from "react-icons/md";
import { FaRocket } from "react-icons/fa6";
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter__icon">
            <MdMarkEmailRead />
            <h3 className="filter__title">Email me for jobs</h3>
        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque corrupti autem similique maiores </p>

        <div className="newsletter__input">
            <input type="text" placeholder="name@mail.com" />
            <button type="submit">Subscribe</button>
        </div>

        <div className="notified">
        <div className="newsletter__icon">
            <FaRocket />
            <h3 className="filter__title">Get notified faster</h3>
        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque corrupti autem similique maiores </p>

        <div className="newsletter__input">
            <button type="submit">Update your resume</button>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter