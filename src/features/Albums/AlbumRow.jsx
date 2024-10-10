import Table from "../../ui/Table";
import formatDate from "../../utils/helpers";
import AlbumOperations from "./AlbumOperations";
import { useGetImageCount } from "./useGetImageCount";
import { useGetImageSizes } from "./useGetImageSizes";
function EmployeeRow({ row }) {
  const { name, id, created_at } = row;
  const { imagesNumber, isLoadingImagesNumber } = useGetImageCount(id);
  const { imageSizes, isLoadinImageSizes } = useGetImageSizes(id);
  const date = formatDate(created_at);
  if (isLoadingImagesNumber || isLoadinImageSizes) return;
  return (
    <Table.Row>
      <h3></h3>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{date}</h3>
      <h3>{imagesNumber}</h3>
      <h3>{imageSizes} Mb</h3>

      <AlbumOperations album={row} />
    </Table.Row>
  );
}

export default EmployeeRow;
