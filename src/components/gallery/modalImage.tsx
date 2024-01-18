import type { IImages } from "../../types/gallery-types";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

type Props = {
  isOpenModel: boolean;
  handleModal: () => void;
  model: IImages | null;
};

function ModalImage({ isOpenModel, handleModal, model }: Props) {
  return (
    <div className={`modal ${isOpenModel ? "open" : ""}`}>
      <div className="bg-modal"></div>
      <img src={model?.src.original} alt="img_modal" />
      <div className="icon" onClick={() => handleModal()}>
        <CancelRoundedIcon fontSize="inherit" />
      </div>
    </div>
  );
}

export default ModalImage;
