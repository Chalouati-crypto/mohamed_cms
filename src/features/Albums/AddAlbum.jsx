import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";

function AddAlbum() {
  return (
    <NavLink to="/album/add">
      <Button variation="black">Add a new album</Button>;
    </NavLink>
  );
}

export default AddAlbum;
