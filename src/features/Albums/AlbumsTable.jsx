import Table from "../../ui/Table";
import AlbumRow from "./AlbumRow";

function AlbumsTable({ albums }) {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <h4></h4>
        <h4>Id</h4>
        <h4>Name</h4>
        <h4>Created At</h4>
        <h4>Number of images</h4>
        <h4>size</h4>
        <h4></h4>
      </Table.Header>
      <Table.Body
        data={albums}
        render={(row) => <AlbumRow key={row.id} row={row} />}
      />
    </Table>
  );
}

export default AlbumsTable;
