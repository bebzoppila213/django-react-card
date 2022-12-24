import { Card } from "../interfaces/Card";
import TableItem from "./TableItem";

type TableProps = {
  tableData: Card[];
  updateCardItem: (cardItem: Card) => void;
};

export default function Table({ tableData, updateCardItem }: TableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Идентификатор</th>
          <th scope="col">Серия</th>
          <th scope="col">Номер</th>
          <th scope="col">Дата выпуска</th>
          <th scope="col">Дата окончания</th>
          <th scope="col">Остаток</th>
          <th scope="col">Статус карты</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((tableItem) => (
          <TableItem
            key={tableItem.id}
            updateCardItem={updateCardItem}
            tableItemData={tableItem}
          ></TableItem>
        ))}
      </tbody>
    </table>
  );
}
