import { useDispatch, useSelector } from "react-redux";
import { removeImportant } from "../Utils/ImportantNewsSlice";
import './Cards.css';


const ImportantNews = () => {
    let dispatch = useDispatch()
  const importantNews = useSelector((store) => store.important.card);

  let handleRemoveImportant = ()=>{
    dispatch(removeImportant())
  }
  
  return (
    <div>
      <section className="my-5 g-4">
        {importantNews.map((addedNews, index) => (
          <div key={index} className="card container-fluid h-50" style={{ width: '18rem' }}>
            <img src={addedNews.urlToImage} className="card-img-top img-fluid p-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{addedNews.title}</h5>
              <p className="card-text">{addedNews.description}</p>
              <a href="#" className="btn btn-dark" onClick={handleRemoveImportant}>Remove from Important</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ImportantNews;