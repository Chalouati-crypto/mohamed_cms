import Heading from "../ui/Heading";
import { useAlbums } from "../features/Albums/useAlbums";
import Container from "../ui/Container";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

import AddAlbum from "../features/Albums/AddAlbum";
import AlbumsTable from "../features/Albums/AlbumsTable";
function Albums() {
  const { albums, isLoadingAlbums } = useAlbums();
  if (isLoadingAlbums) return <Spinner />;
  return (
    <Container>
      <Row type="horizontal">
        <Heading>All Albums</Heading>
        <AddAlbum />
      </Row>

      <Row>
        <AlbumsTable albums={albums} />
      </Row>
    </Container>
  );
}

export default Albums;
