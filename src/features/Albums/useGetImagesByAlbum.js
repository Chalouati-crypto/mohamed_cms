import { useQuery } from "@tanstack/react-query";
import { getImagesByAlbum } from "../../services/apiAlbums";

export function useGetImagesByAlbum(id) {
  const {
    isLoading: isLoadingStoredImages,
    data: storedImages,
    error,
  } = useQuery({
    queryKey: ["Images"],
    queryFn: () => getImagesByAlbum(id),
  });

  return { isLoadingStoredImages, error, storedImages };
}
