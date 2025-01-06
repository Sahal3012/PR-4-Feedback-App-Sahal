import { useState } from 'react';
function Feedback() {
  const [feedback, setFeedback] = useState  ({name : '' ,email: '', comments: '',rating:0 });
  const [submittedFeedback, setSubmittedFeedback] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFeedback({ ...feedback, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.email && feedback.comments && feedback.rating) {
      setSubmittedFeedback([...submittedFeedback, feedback]);
      setFeedback({ name: '', email: '', comments: '', rating: 0 });
    }
  };

  return (
    <div className="container mt-1 bg-secondary " >
      <h1 className='text-center fw-bolder mt-2'>Feedback Form</h1>
      <form onSubmit={handleSubmit} className="mt-5  p-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bolder">Student Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bolder">Student Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label fw-bolder">Enter Your Feedback:</label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            rows="3"
            value={feedback.comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bolder">Rating:</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`btn ${feedback.rating >= star ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h2 className='text-center mt-1'>Submitted Feedback</h2>
      {submittedFeedback.length > 0 ? (
        <div className="row">
          {submittedFeedback.map((fb, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-2  " >
                <div className="card-body ">
                  <h5 className="card-title">Name:{fb.name}</h5>
                  <h5 className="card-subtitle mb-2 text-muted">Email:{fb.email}</h5>
                  <h5 className="card-text">Comments:{fb.comments}</h5>
                  <h5 className="card-text">Rating: {'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center mt-3 fw-bolder'>No feedback Submitted Student .</p>
      )}
    </div>
  );
}

export default Feedback;