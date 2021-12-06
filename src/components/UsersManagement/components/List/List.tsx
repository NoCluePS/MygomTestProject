import { FC, useState } from "react";
import { IItem } from "~/services/getUserItems";
import ItemIcon from "./components/ItemIcon";
import updateItem from "../../../../services/updateItem";
import Modal from "react-modal";

import "./list-style.scss";

interface IList {
  items: Array<IItem>;
  refresh: Function;
}

interface IUpdateModal {
  item: IItem;
  refresh: Function;
}

const UpdateModal: FC<IUpdateModal> = ({ item, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <div className="pt-12px text-center">
          <button
            className="button"
            onClick={async () => {
              await updateItem({
                ...item,
                email: newEmail,
              });
              refresh();

              setShowModal(false);
            }}
          >
            Change
          </button>
          <button
            className="button ml-12px"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

const List: FC<IList> = ({ items, refresh }) => (
  <ul className="list">
    {items.map((item) => (
      <li className="item">
        <ItemIcon name={item.name} />
        <div>
          <div className="title">{item.name}</div>
          <div className="description">{item.email}</div>
        </div>
        <UpdateModal refresh={refresh} item={item} />
      </li>
    ))}
  </ul>
);

export default List;
