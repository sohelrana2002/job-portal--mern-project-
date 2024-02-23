

import './InputLocation.css'

const InputLocation = ({handleRatioInput, value, title, name}) => {
  return (
    <div className="input__location">
        <label onChange={handleRatioInput}>
          <input
            type="radio"
            name={name}
            value={value}
            onChange={handleRatioInput}
            className='radio'
          />
          <span> </span>{title}
        </label>
    </div>
  )
}

export default InputLocation