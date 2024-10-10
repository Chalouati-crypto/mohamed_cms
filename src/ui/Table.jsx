import { createContext, useContext } from "react";
import styled from "styled-components";
import Empty from "../ui/Empty";

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;
const StyledTable = styled(CommonRow)`
  margin-top: 1rem;
  padding: 0.2rem 2rem;
  border: 1px solid rgba(7, 4, 13, 0.2);
  /* height: 80%; */
`;
const StyledRow = styled(CommonRow)`
  margin: 0.7rem 0;
  grid-column: 1 / -1;
`;

const StyledHeader = styled(CommonRow)`
  margin: 0.8rem 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  padding: 0rem 1.2rem 0 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <>{data.map(render)}</>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
