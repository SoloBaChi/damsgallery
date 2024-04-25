import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function AdminUpload(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle error message
  const handleErrorMessage = (err) => {
    const error = err.message[0].msg || err.message;
    setErrorMessage(error);
  };

  // Handle file Upload
  const fileUpload = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");
    try {
      const cloudName = "dixtysymz";
      let resourceType = "image";
      let apiKey = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(apiKey, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (err) {
      console.log(err);
    }
  };

  // Update the user details
  const handleChange = (event) => {
    setDetails((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  // Handle image
  const handleImageUpload = (e) => {
    setImg((prev) => e.target.files[0]);
  };
  // Hnadle Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const imgSrc = await fileUpload();
      const data = {
        title: details.title,
        description: details.description,
        imgSrc: imgSrc,
        price: details.price,
      };

      // Send the Request to the backend using fetch API
      const res = await fetch(
        `https://dams-gallery-api.vercel.app/api/v1/upload-product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const resBody = await res.json();
      handleErrorMessage(resBody);

      // console.log(resBody);
      setDetails((prev) => {
        return {
          ...prev,
          ...resBody,
        };
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  // console.log(img);

  return (
    <section className="admin-upload">
      <h6>Welcome to dams gallery Admin page !</h6>
      <h5>You can upload details related to products</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">product name</label>
          <input
            type="text"
            placeholder="Product title"
            name="title"
            id="title"
            value={details.title}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            placeholder="Product Description"
            id="description"
            name="description"
            value={details.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="photo">
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              id="photo"
              // value={details.imgSrc}
              onChange={handleImageUpload}
            />
            {!img ? "Upload Product Image" : img.name}
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">price(amount in $)</label>
          <input
            type="number"
            name="price"
            id="price"
            value={details.price}
            onChange={handleChange}
            placeholder="100"
          />
        </div>
        <div>
          {/* Return error message*/}
          {details.status === "success" ? (
            navigate("/upload-successful")
          ) : (
            <span style={{ color: "red" }}>{errorMessage}</span>
          )}
        </div>
        <div className="cta-btn">
          <button>
            {loading ? (
              "Upload"
            ) : (
              <ThreeDots
                visible={true}
                height="20"
                width="60"
                color="#ef5533"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AdminUpload;
