import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { createClient } from 'pexels';
import PexelPictureGrid from "../../components/PexelPictureGrid/index.js"
const client = createClient("PYyuBmxiimtl3ZUUi2y2d7MKvzXmqkFXkUxms2pyKFzze4OE7hSwflfV")

const Home = () => {
  const [page, setPage] = useState();
  const [pictureArray, setPictureArray] = useState([{}]);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState()
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handlePageClick = (event) => {
    const targetPage = parseInt(event.target.innerText);
    handlePageChange(targetPage);
    setActive(targetPage);
  };
  const handlePageChange = (page) => {
    setPage(page);
    pexelSearch(page);
  };
  async function pexelSearch(page) {
    console.log(page)
    if (!query) {
      return false;
    }
    try {
      const response = await client.photos.search({query, orientation: "landscape", per_page: 8, page, total_reults: 100})
      console.log(response)
      setPictureArray(response.photos)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="row">
      <div className="col-3">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="enter search term"
        ></input>
        <button
          type="click"
          onClick={() => pexelSearch(page)}
          id="Search-btn"
          className="btn"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="col-8">
      {pictureArray.length === 8 ? (
          <PexelPictureGrid
            pexelPictureArray={pictureArray}
            page={page}
            handlePageClick={handlePageClick}
            active={active}
          />
        ) : (
        <></>
        )}
      </div>
    </section>
  );
};

export default Home;
