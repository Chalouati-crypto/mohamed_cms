import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import styled from "styled-components";
import { useDeleteAlbum } from "./useDeleteAlbum";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
const StyledButton = styled.button`
  border: none;
  background-color: red;
  cursor: pointer;
  color: white;
  padding: 1rem 2rem;
  transform: translateY(-25%);
`;

function AlbumOperations({ album }) {
  const { deleteAlbum, isDeletingAlbum } = useDeleteAlbum();

  return (
    <div className="text-right">
      <Modal size="large">
        <Modal.Open opens="delete">
          <StyledButton>
            <RiDeleteBin7Fill />
          </StyledButton>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            onConfirm={() => {
              deleteAlbum(album.id);
            }}
            resourceName="albums"
            disabled={isDeletingAlbum}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AlbumOperations;
