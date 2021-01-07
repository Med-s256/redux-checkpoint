import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { complete_task, delete_task } from "../js/action/ActionTask";
import ModalComponent from "./ModalComponent";

function ListTask({ taskList }) {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };
  return (
    <div className="main">
      {taskList.map((el) => (
        <div key={el.id} className="list">
          <h5 className={el.isDone ? "thtext" : "text"}>{el.task}</h5>
          <button
            onClick={() => dispatch(complete_task(el.id))}
            className="btn-a"
          >
            {el.isDone ? "undo" : "complete"}
          </button>
          <button
            className="btn-a"
            onClick={() => dispatch(delete_task(el.id))}
          >
            delete
          </button>
          <button className="btn-a" onClick={() => handleShow(el.id)}>
            edit
          </button>
        </div>
      ))}
      <ModalComponent
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        id={id}
      />
    </div>
  );
}

export default ListTask;
