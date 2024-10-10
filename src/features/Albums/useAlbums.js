import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../../services/apiAlbums";

export function useAlbums() {
  const {
    isLoading: isLoadingAlbums,
    data: albums,
    error,
  } = useQuery({
    queryKey: ["Albums"],
    queryFn: getAlbums,
  });

  return { isLoadingAlbums, error, albums };
}
