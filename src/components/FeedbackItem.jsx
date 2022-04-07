// import { useState } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('This is an example of a feedback item2')

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1
  //   })
  // }

  // const handleClick = (id) => {
  //   console.log(id)

  return (
    // <div className="card">
    //   <div className="num-display">{item.rating}</div>
    //   <div className="text-display">{item.text}</div>
    //   {/* <button onClick={handleClick}>Click</button> */}
    // </div>

    // <Card reverse={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* <button onClick={() => handleClick(item.id)} className="close">  */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
