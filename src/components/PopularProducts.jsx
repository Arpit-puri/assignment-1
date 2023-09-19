import React, { useState } from 'react';
import Popup from './Popup';
import { useContext } from 'react';
import { UserContext } from '../App';

function PopularProducts() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      {user.map((val) => (
        <div key={val.email}>
          <p>Name: {val.name}</p>
          <p>Email: {val.email}</p>
          {val.phone}
          {val.instagram}
          {val.youtube}
        </div>
      ))}

      <div className="w-1/2 h-[22rem] bg-white p-4 border shadow-md rounded-lg">
        <div className="flex justify-center mt-11">
          <img
            className="w-48 cursor-pointer"
            src="./images/plus.png"
            alt="addicon"
            onClick={togglePopup}
          />
        </div>
        <div className="flex text-center justify-center m-4 font-bold text-lg">
          <strong className="text-gray-700 text-center font-medium">
            Add Profiles
          </strong>
        </div>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="bg-white p-8 rounded-lg z-10">
              <h2 className="text-2xl font-semibold mb-4">Popup Content</h2>
              <Popup />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded"
                onClick={togglePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularProducts;
