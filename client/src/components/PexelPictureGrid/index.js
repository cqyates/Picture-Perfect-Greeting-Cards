import PexelPictureCard from "../PexelPictureCard/index.js";
import {Pagination} from "react-bootstrap";

const PexelPictureGrid = ({ pexelPictureArray,page,handlePageClick, active}) => {
 
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} value={number} active={number === active} >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {pexelPictureArray.map((picture, index) => (
        <PexelPictureCard key={index} picture={picture} />
      ))}
      <div>
        <Pagination onClick={handlePageClick}>{items}</Pagination>
        <br />
      </div>
    </div>
  );
};
export default PexelPictureGrid;