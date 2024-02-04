import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// actions import
import {
  postApiStarted,
  postApiSuccess,
  postApiFailure,
} from "../redux/actions/postApiActions";
function PostDisplay() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postApiStarted());
    setTimeout(() => {
      axios
        .get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then((response) => dispatch(postApiSuccess(response.data)))
        .catch((err) => dispatch(postApiFailure(err)));
    }, 1200);
  }, []);

  const { loading, data, error } = useSelector((state) => state); // get the vals from the store
  return (
    <div>
      <h1>
        <center>Posts App</center>
      </h1>
      {data.length > 0 &&
        data.map((item, idx) => (
          <div className="item" key={item.id}>
            <h2>{item.title}</h2>
            <h5>userId = {item.id}</h5>
            <p>{item.body}</p>
            <hr />
            <hr />
          </div>
        ))}
    </div>
  );
}

export default PostDisplay;
