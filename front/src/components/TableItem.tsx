import { Card } from "../interfaces/Card";

type TableItemProps = {
    tableItemData: Card,
    updateCardItem: (cardItem: Card) => void
}

export default function TableItem({ tableItemData, updateCardItem }: TableItemProps) {
  return (
    <tr onClick={() => updateCardItem(tableItemData)}>
      <th scope="row">{tableItemData.id}</th>
      <td>{tableItemData.series}</td>
      <td>{tableItemData.number}</td>
      <td>{tableItemData.release_date}</td>
      <td>{tableItemData.end_date}</td>
      <td>{tableItemData.balanse}</td>
      <td>{tableItemData.status}</td>
    </tr>
  );
}
