import React, { useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Postupdate = (props) => {
  const [title, Settitle] = useState();
  const [desc, Setdesc] = useState();
 

  const handleChange1 = (ev) => {
    console.log("handlechange1", ev.target.value);
    Settitle(ev.target.value);
  };
  const handleChange2 = (e) => {
    console.log("handlechange2", e.target.value);
    Setdesc(e.target.value);
  };
  useEffect(() => {
    Settitle(props.title);
    Setdesc(props.description);
  }, []);
  return (
    <div>
      <Modal
        isOpen={props.isVisible}
        // onRequestClose={this.props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleChange1}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={handleChange2}
        />
        <button onClick={() => props.updatePost(props.ids, title, desc)}>
          {" "}
          Update!!!{" "}
        </button>
        <button onClick={props.closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default Postupdate;