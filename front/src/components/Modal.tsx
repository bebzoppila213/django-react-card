import { Card } from "../interfaces/Card";
import FormItem from "./FormItem";
import CustopSelect from "./CustomSelect";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardHistory from "./CardHistory"

type ModalProps = {
  cardItem: Card;
  updateCardItemState: (card: Card) => void;
  closeModal: () => void;
  deleteCartItem: (id: number) => void;
};
const selectOptions = [
  {
    value: "AC",
    text: "Активированная",
  },
  {
    value: "NO_AC",
    text: "Не активированная",
  },
  {
    value: "EX",
    text: "Просроченная",
  },
];

export default function Modal({
  cardItem,
  updateCardItemState,
  closeModal,
  deleteCartItem,
}: ModalProps) {

  const [formState, setFormState] = useState<Card>(cardItem);
  const [erors, setErros] = useState(false);
  
  const updateFormState = (key: keyof Card, text: string) => {
    setFormState({ ...formState, [key]: text });
  };

  const sendPatch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/v1/cards/${cardItem.id}`,
        formState
      );
      setErros(false);
      updateCardItemState(formState);
    } catch (error) {
      setErros(true);
    }
  };

  const deleteCard = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/cards/${cardItem.id}`);
      setErros(false);
      deleteCartItem(formState.id);
    } catch (error) {
      setErros(true);
    }
    closeModal();
  };

  useEffect(() => {
    setFormState({ ...cardItem });
  }, [cardItem]);

  return (
    <div className="custom-modal">
      <div className="custom-modal__inner">
        <form>
          <FormItem
            updateState={(text) => updateFormState("series", text)}
            defaultValue={String(formState.series)}
            label="Серия"
          ></FormItem>
          <FormItem
            updateState={(text) => updateFormState("number", text)}
            defaultValue={String(formState.number)}
            label="Номер"
          ></FormItem>
          <FormItem
            updateState={(text) => updateFormState("release_date", text)}
            defaultValue={String(formState.release_date)}
            label="Дата выпуска"
          ></FormItem>
          <FormItem
            updateState={(text) => updateFormState("end_date", text)}
            defaultValue={String(formState.end_date)}
            label="Дата окончания"
          ></FormItem>
          <FormItem
            updateState={(text) => updateFormState("balanse", text)}
            defaultValue={String(formState.balanse)}
            label="Баланс"
          ></FormItem>
          <CustopSelect
            label="Статус"
            defaultSelect={formState.status}
            options={selectOptions}
            updateSelect={(text) => updateFormState("status", text)}
          ></CustopSelect>
          <div className="d-flex gap-2">
            <button
              onClick={sendPatch}
              type="button"
              className="btn btn-primary mt-2"
            >
              Отправить
            </button>
            <button
              onClick={() => deleteCard()}
              type="button"
              className="btn btn-danger mt-2"
            >
              Удалить
            </button>
            <button
              onClick={() => closeModal()}
              type="button"
              className="btn btn-danger mt-2"
            >
              Закрыть
            </button>
          </div>
        </form>
        {erors && (
          <div className="alert alert-danger mt-3" role="alert">
            Произошла ошибка
          </div>
        )}
        <CardHistory cardId={formState.id}></CardHistory>
      </div>
    </div>
  );
}
