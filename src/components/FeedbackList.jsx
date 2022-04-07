import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

// dont need feedback in the function, as it comes from Feedbacklist
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //         >
  //           <FeedbackItem key={item.id} item={item} />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // )

  // Return w/o Animation:
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        // <div>{item.rating}</div>
        <FeedbackItem
          key={item.id}
          item={item}
          // handleDelete={(id) => console.log(id)}
        />
      ))}
    </div>
  )
}

// No longer need as we use FeedbackContext.js:
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     }),
//   ),
// }

export default FeedbackList
