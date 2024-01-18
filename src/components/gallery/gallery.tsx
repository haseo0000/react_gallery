import "./gallery.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGallery } from "./useGallery";

import LoaderImage from "./loaderImage";
import CardImage from "./cardImage";
import ModalImage from "./modalImage";

function Gallery() {
  const { images, handleModal, model, isOpenModel, getImage, page } = useGallery();

  return (
    <>
      <ModalImage isOpenModel={isOpenModel} handleModal={handleModal} model={model} />
      {images && (
        <InfiniteScroll
          className="gallery_container"
          dataLength={images.length}
          next={() => {
            setTimeout(() => {
              getImage((page.current += 1));
            }, 2000);
          }}
          scrollThreshold={0.95}
          hasMore={true}
          loader={<LoaderImage />}>
          {images.map((image) => (
            <CardImage key={image.id} handleModal={handleModal} image={image} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}

export default Gallery;
