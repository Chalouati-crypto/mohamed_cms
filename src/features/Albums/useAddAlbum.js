import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAlbum as addAlbumApi } from "../../services/apiAlbums";
import { useNavigate } from "react-router-dom";
export function useAddAlbum() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: addAlbum, isLoading: isAddingAlbum } = useMutation({
    mutationFn: addAlbumApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Albums"],
      });
      navigate("/Albums");
    },
  });
  return { addAlbum, isAddingAlbum };
}
