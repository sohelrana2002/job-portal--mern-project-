
import './Button.css'

const Button = ({handleButtonInput, value, title}) => {
  return (
    <button onClick={handleButtonInput}
     value={value} className='button'>
            {title}
    </button>
  )
}

export default Button