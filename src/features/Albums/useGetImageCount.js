import { useQuery } from "@tanstack/react-query";
import { getImagesNumber } from "../../services/apiAlbums";

export function useGetImageCount(id) {
  const {
    isLoading: isLoadingImagesNumber,
    data: imagesNumber,
    error,
  } = useQuery({
    queryKey: ["Imagesnumbers", id],
    queryFn: () => getImagesNumber(id),
  });

  return { isLoadingImagesNumber, error, imagesNumber };
}
