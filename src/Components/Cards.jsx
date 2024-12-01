/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addImportant } from "../Utils/ImportantNewsSlice";
import './Cards.css';

const Cards = ({ title, description, urlToImage }) => {
  const dispatch = useDispatch();
  const handleMarkImportant = () => {
    dispatch(addImportant({ title, description, urlToImage }));
  };

  const allTitle = title.length > 15 ? title.substring(0, 15) + '..' : title;
  const allDescription = description && description.length > 50 ? description.substring(0, 50) + '...' : description;

  return (
    <section className="mx-4 my-5">
      <div className="card container-fluid bg-light border rounded-3" style={{ width: '18rem' }}>
        <img src={urlToImage} className="card-img-top img-fluid p-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{allTitle}</h5>
          <p className="card-text">{allDescription}</p>
          <a href="#" className="btn btn-danger ms-4" onClick={handleMarkImportant}>Mark as Important !</a>
        </div>
      </div>
    </section>
  );
};

export default Cards;