import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPrice(res.data.price);
      setQuantity(res.data.quantity);
      setUnitprice(res.data.unitprice);
      setModel(res.data.model);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        // price,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            AdminName:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <div className="singlePostInfo">
        <p className="singlePostAuthor">Category:</p>
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        ) : (
          <h1 className="singlePostDesc">{model}</h1>
        )}
        </div>
        <div className="singlePostInfo">
        <p className="singlePostAuthor">Quantity:</p>
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        ) : (
          <h1 className="singlePostDesc">{quantity}</h1>
        )}
        </div>
        <div className="singlePostInfo">
        <p className="singlePostAuthor">UnitPrice:</p>
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={unitprice}
            onChange={(e) => setUnitprice(e.target.value)}
          />
        ) : (
          <h1 className="singlePostDesc">{unitprice}</h1>
        )}
        </div>
        <div className="singlePostInfo">
        <p className="singlePostAuthor">TotalPrice:</p>
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        ) : (
          <h1 className="singlePostDesc">{price}</h1>
        )}
        </div>
        
        <div className="singlePostInfo">
        <p className="singlePostAuthor">Description:</p>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        </div>
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
