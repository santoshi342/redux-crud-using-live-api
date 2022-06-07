import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { showpost, deletepost, updatepost1 } from "../Redux/Action/userAction";
import pic from "../Image/icon.png";
import pic2 from "../Image/icon2.png";
import Paginations from "./Paginations";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import Postupdate from "./Postupdate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addDays from "date-fns/addDays";
import ReactPaginate from "react-paginate";
import Select from "react-select";

// -- function  start --
const Dashboard = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [isVisible, SetisVisible] = useState(false);
  const [ids, Setids] = useState();
  const [title, Settitle] = useState();
  const [description, Setdescription] = useState();
  const [search, setNewsearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const getpost = useSelector((state) => state);
  console.log("111111", getpost);


  const [currentPage, setCurrentPage] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedValue, setSelectedValue] = useState([]);



  const navigate = useNavigate();

  const id = localStorage.getItem("Id");

  useEffect(() => {
    dispatch(showpost());
  }, []);

  // For logout button
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Token");
    localStorage.removeItem("Id");
    window.location.href = "/";
  };

  // Create post
  const create = (data) => {
    navigate("/createpost");
  };

  // Remove post
  const remove = (id) => {
    console.log("removeid", id);
    dispatch(deletepost(id));
  };

  // toastify pop up
  useEffect(() => {
    if (getpost?.post?.deletResponse?.data?.success) {
      toast.success(`${getpost?.post?.deletResponse?.data?.message[0]}`);
      dispatch(showpost());
    }
    if (getpost?.post?.updatePost?.data?.success) {
      toast.success(`Post Updated Successfully!`);
    }
    if (getpost?.post?.createPost?.data?.succes) {
      toast.success("Post Created Successfully!");
    }
  }, [getpost.post]);

  // For edit post
  const edit = (id, title, description) => {
    SetisVisible(true);
    Setids(id);
    Settitle(title);
    Setdescription(description);
  };

  // For update post using modal
  const updatePost = (id, title, description) => {
    dispatch(updatepost1(id, title, description));
    isVisible && SetisVisible(false);
  };

  const closeModal = () => {
    console.log("Modal Closed");
    SetisVisible(false);
  };

  const handleSearch = (e) => {
    setNewsearch(e.target.value);
  };

  const filtered = !search
    ? getpost.post.data.posts
    : getpost.post.data.posts.filter(
        (data) =>
          data.title.toLowerCase().includes(search.toLowerCase()) ||
          data.description.toLowerCase().includes(search.toLowerCase())
      );

  const data = [
    {
      value: "react",
      label: "cerulean",
    },
    {
      value: "java",
      label: "java",
    },
    {
      value: "javascript",
      label: "javascript",
    },
    {
      value: "ruby",
      label: "ruby",
    },
    {
      value: "nodejs",
      label: "nodejs",
    },
    {
      value: "python",
      label: "python",
    },
  ];

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  return (
    <div>
      {isVisible && (
        <Postupdate
          isVisible={isVisible}
          closeModal={closeModal}
          ids={ids}
          title={title}
          description={description}
          updatePost={updatePost}
        />
      )}
      <form onSubmit={handleSubmit()}>
        <span className="dashboard-heading">
          <center>Welcome to dashboard!</center>
        </span>
        <img
          src={pic2}
          onClick={logout}
          className="logout-btn1"
          alt="logout-icon"
        />
        <br />
        <img src={pic} alt="user-icon" /> <spam>User: {id}</spam>
        <br />
        <br />
        <input
          type="text"
          placeholder="Search for..."
          value={search}
          onChange={handleSearch}
        />
        <button>Search</button>
        <div className="create-btn">
          <button onClick={create} className="create-btn1">
            CreatePost
          </button>
        </div>
        <div className="dropdown">
          <Select
            placeholder="Select Option"
            value={data.filter((obj) => selectedValue.includes(obj.value))} // set selected values
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
            isMulti
            isClearable
          />
        </div>
        {selectedValue && (
          <div style={{ marginTop: 20, lineHeight: "25px" }}>
            <div>
              <b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}
            </div>
            <br />
          </div>
        )}
      </form>

      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
              <th>CreateDate</th>
              <th>UpdateDate</th>
            </tr>
          </thead>
          <tbody>
            {/* {getpost?.post?.data?.posts?.map((item, index) => { */}
            {filtered?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => remove(item.id)}>Delete</button>
                    <button
                      onClick={() =>
                        edit(item.id, item.title, item.description)
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td>{item.created_at.split("T")[0]}</td>
                  <td className="datepicker">
                    <DatePicker
                      selected={startDate}
                      // dateFormat="yyyy-dd-MMMM"
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={20}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 7)}
                      onChange={(date) => setStartDate(date)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Paginations
        // totalRecords={NUM_OF_RECORDS}
        // pageLimit={LIMIT}
        nextLabel="next >"
        previousLabel="< previous"
        pageNeighbours={2}
        // onPageChanged={onPageChanged}
        // currentPage={currentPage}
      />
    </div>
  );
};

export default Dashboard;
