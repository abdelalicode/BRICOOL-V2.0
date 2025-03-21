import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import "../../App.css";
import Api from './../../services/Api';

export default function ReviewModal({ worker , onReviewAdded }) {
  const [openModal, setOpenModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  

  // const handleCancelRequest = async () => {
  //   console.log(requestid);
  //   await Api.cancelRequest(requestid).then( setOpenModal(false));
  //   fetchUpdatedClient();
  // };

  const [formData, setFormData] = useState({
    stars: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (value) => {
    setFormData({ ...formData, stars: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
      const response = await Api.SendReview(
        formData.stars,
        formData.content,
        worker.id
      );

      console.log(response.data);

      const newReview = {
        id: response.data.id,
        stars: formData.stars,
        content: formData.content,
        date: new Date().toISOString(),
        client: {
          id: response.data.client.id,
          firstName: response.data.client.firstName,
          lastName: response.data.client.lastName
        }
      };

    onReviewAdded(newReview);
    setFormData({
      stars: "",
      content: ""
    });
    setOpenModal(false)
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    
  };


  return (
    <>
    {showNotification && (
        <div className="fixed top-72 right-4 z-50 animate-fade-in-down">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Review added successfully!</span>
          </div>
        </div>
      )}

      <Button onClick={() => setOpenModal(true)}>
        <button
          className="bg-yellow-400 -mx-3 active:bg-pink-600 uppercase text-slate-800 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Add Review
        </button>
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">

                  <p className="my-4 font-bold">REVIEW FOR {worker.firstName} {worker.lastName}</p>
             {/* <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleCancelRequest}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div> */}

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-sm text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="stars"
                  >
                    YOUR RATING
                  </label>
                </div>
                <div className="md:w-2/3">
                  <div class="rating">
                  {[5, 4, 3, 2, 1].map((value, index) => (
                    <React.Fragment key={index}>
                      <input
                        value={value}
                        name="stars"
                        id={`star${value}`}
                        type="radio"
                        onChange={() => handleStarClick(value)}
                      />
                      <label htmlFor={`star${value}`}></label>
                    </React.Fragment>
                  ))}
                  </div>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-sm text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="content"
                  >
                    YOUR REVIEW
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="content"
                    type="text"
                    name="content"
                    placeholder="Your description here"
                    value={formData.content}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-slate-500 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    ADD REVIEW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
