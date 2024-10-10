import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteAlbum as deleteAlbumApi } from "../../services/apiAlbums";
export function useDeleteAlbum() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingAlbum, mutate: deleteAlbum } = useMutation({
    mutationFn: deleteAlbumApi,
    onSuccess: () => {
      toast.success("Album Successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["Albums"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingAlbum, deleteAlbum };
}
