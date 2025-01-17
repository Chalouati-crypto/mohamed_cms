import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("logged in successfuly");
      queryClient.setQueryData(["user"], user.user);
      navigate("/albums", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLogging };
}
