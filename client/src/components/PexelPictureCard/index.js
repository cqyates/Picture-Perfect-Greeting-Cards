import {Card} from 'react-bootstrap';
const PexelPictureCard = ({ picture }) => {
  const handleImageSelect = (event) => {
    const pexelID = event.target.getAttribute('data-pid');
    localStorage.setItem('currentImage', pexelID);
    document.location.href = "/build"
  };

  return (
    <Card
      key={picture.id}
      style={{
        width: '16em',
        padding: '12px 12px 24px 12px',
        margin: '10px 0',
        boxShadow: '1px 1px 5px grey',
      }}
    >
      <Card.Img
        src={picture.src.small}
        onClick={handleImageSelect}
        data-pid={picture.id}
      />
    </Card>
  );
};

export default PexelPictureCard;
