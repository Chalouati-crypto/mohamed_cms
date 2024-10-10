import { useQuery } from "@tanstack/react-query";
import { getImagesSize } from "../../services/apiAlbums";

export function useGetImageSizes(id) {
  const {
    isLoading: isLoadingImageSizes,
    data: imageSizes,
    error,
  } = useQuery({
    queryKey: ["Imagessizes", id],
    queryFn: () => getImagesSize(id),
  });

  return { isLoadingImageSizes, error, imageSizes };
}
