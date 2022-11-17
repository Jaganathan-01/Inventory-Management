import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [model, setModel] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      price,
      quantity,
      unitprice,
      desc,
      model,
    };
    console.log(newPost);
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <div className="register">
      <span className="registerTitle">
        ADD PRODUCTS</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        
      <label>PRODUCTS NAME:</label>
      <input className="registerInput" 
        type="text"
        placeholder="Enter your productname..."
        onChange={e=>setTitle(e.target.value)} />

        <label for="cars" >PRODUCT CATEGORY:</label>
          <select className="registerInput" onChange={e=>setModel(e.target.value)}>
              <option value="SHOES"  onChange={e=>setModel(e.target.value)}>Shoes</option>
              <option value="INSTRUMENTS"  onChange={e=>setModel(e.target.value)}>Instruments</option>
              <option value="PHONES"  onChange={e=>setModel(e.target.value)}>Phones</option>
              <option value="TELEVISION"  onChange={e=>setModel(e.target.value)}>Tv</option>
              <option value="DRESS"  onChange={e=>setModel(e.target.value)}>Dress</option>
              <option value="AIRPODS"  onChange={e=>setModel(e.target.value)}>Airpods</option>
          </select>

        <label>PRODUCT QUANTITY:</label>
        <input className="registerInput" 
        type="number" 
        placeholder="Enter your product quantity..."
        onChange={e=>setQuantity(e.target.value)}  />

        <label>PRODUCT UNIT PRICE:</label>
        <input className="registerInput"
        type="number"
        placeholder="Enter your product price..."
        onChange={e=>setUnitprice(e.target.value)}  />

        <label>PRODUCT TOTAL PRICE:</label>
        <input className="registerInput"
        type="number"
        placeholder="Enter your total price..."
        onChange={e=>setPrice(e.target.value)}  />

        <label>DESCRIPTION::</label>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="registerInput"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        
          
        <label>CHOOSE FILE:</label>
         <label htmlFor="fileInput" className="align">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        <button className="registerButton" type="submit">Submit</button>
      </form>
        
    </div>
    </div>
  );
}
