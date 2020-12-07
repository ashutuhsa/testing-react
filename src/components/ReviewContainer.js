import React, { useState } from 'react'

const ReviewContainer = () => {
  const [review, setReview] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setReview('')
  }

  return (
    <div>
      <h1>Review Container</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Add review</h4>
          <textarea
            id="reviewText"
            ariaLabel="reviewText"
            value={review}
            onChange={(e) => setReview(e.target.value)} />
          <div>
            <button type="submit">Post Review</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewContainer
