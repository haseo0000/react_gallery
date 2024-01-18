import { useEffect, useRef, useState } from "react";
import type { IImages } from "../../types/gallery-types";

export function useGallery() {
  const [images, setImages] = useState<IImages[] | null>(null);
  const [model, setModal] = useState<IImages | null>(null);
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
  const page = useRef<number>(1);

  const getImage = async (page: number) => {
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=6&page=${page}`;

    const response = await fetch(url, {
      headers: {
        Authorization: "72EYUANdv1I8O03wXwK3PHcGbEQRNKCniwRYQEqmfmeHqNRMXQInEINq",
      },
    });
    const data = await response.json();

    if (images) {
      setImages((prev) => [...prev!, ...data.photos]);
      return;
    }
    setImages(data.photos);
  };

  const handleModal = (image?: IImages) => {
    if (image) {
      setIsOpenModel(!isOpenModel);
      setModal(image);
      return;
    }

    setIsOpenModel(!isOpenModel);
    setTimeout(() => {
      setModal(null);
    }, 300);
  };

  useEffect(() => {
    getImage(page.current);
  }, []);

  return {
    handleModal,
    getImage,
    isOpenModel,
    images,
    model,
    page,
  };
}
