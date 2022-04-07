// import { v4 as uuid4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
// import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuid4()
  //   // console.log(newFeedback)
  //   setFeedback([newFeedback, ...feedback])
  // }

  // const deleteFeedback = (id) => {
  //   // console.log('App', id)
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setFeedback(feedback.filter((item) => item.id !== id))
  //   }
  // }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/* <FeedbackItem /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
