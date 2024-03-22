import React from "react";

function AdminUpload(props) {
  return (
    <section>
      <h5>You can upload details related to products or artist</h5>
      <form>
        <div className="form-field">
          <label htmlFor="title">name</label>
          <input type="text" placeholder="Product or Artis title" />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description of the Product or Artist"
            id="description"
          />
        </div>
        <div className="form-field">
          <label htmlFor="photo"></label>
          <input
            type="file"
            accept="*/image"
            placeholder="Product or Artist photo"
            id="photo"
          />
        </div>
        <div className="cta-btn">
          <button>submit</button>
        </div>
      </form>
    </section>
  );
}

export default AdminUpload;
