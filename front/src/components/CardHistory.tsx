import useFetch from "../hooks/useFetch";
import { ICardHistory } from "../interfaces/Card";

type CardHistoryProps = {
  cardId: number;
};

export default function CardHistory({ cardId }: CardHistoryProps) {
  const [history] = useFetch<ICardHistory[]>(
    [],
    `http://127.0.0.1:8000/api/v1/history-card/${cardId}`
  );

  return (
    <div className="history mt-3">
      <h4 className="text-white">История покупок</h4>
      <ul>
        {history.map((his, index) => (
          <li className="text-white" key={index}>
            Дата: <strong className="text-info">{his.purchase_date}</strong>{" "}
            Сумма: <strong className="text-info">{his.sum}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
