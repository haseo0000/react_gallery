import type { IImages } from "../../types/gallery-types";

type Props = {
  image: IImages;
  handleModal: (image: IImages) => void;
};

function CardImage({ image, handleModal }: Props) {
  return (
    <div className="pics" key={image.id} onClick={() => handleModal(image)}>
      <img src={image.src.original} alt={image.alt} />
      <div className="photoGrapher">
        <span className="photographer_title">PhotoGraph by</span>
        <span className="photographer_name">{image.photographer}</span>
      </div>
    </div>
  );
}

export default CardImage;
