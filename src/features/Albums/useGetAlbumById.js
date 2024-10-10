import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../../services/apiAlbums";

export function useGetAlbumById(id) {
  const {
    isLoading: isLoadingAlbum,
    data: album,
    error,
  } = useQuery({
    queryKey: ["Album"],
    queryFn: () => getAlbum(id),
  });

  return { isLoadingAlbum, error, album };
}
