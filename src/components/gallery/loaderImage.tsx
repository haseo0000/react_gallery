import Skeleton from "@mui/material/Skeleton";

function LoaderImage() {
  return Array(2)
    .fill("1")
    .map((_, idx) => (
      <Skeleton
        key={idx}
        animation="wave"
        variant="rounded"
        width={"100%"}
        height={300}
        sx={{ bgcolor: "rgb(33, 33, 33)", marginBottom: "1rem" }}
      />
    ));
}

export default LoaderImage;
