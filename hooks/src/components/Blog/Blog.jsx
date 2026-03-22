/** @format */

import { useState } from "react";

function Blog() {
  const [Title, SetTitle] = useState("");
  const [Content, Setcontent] = useState("");
  const [Store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handletitle = (e) => {
    SetTitle(e.target.value);
  };

  const handlecontent = (e) => {
    Setcontent(e.target.value);
  };

  const handlestore = () => {
    setStore([{ title: Title, data: Content }, ...Store]);
    SetTitle("");
    Setcontent("");
  };

  const deleteBlog = (index) => {
    const copy = [...Store];
    copy.splice(index, 1);
    setStore(copy);
  };

  return (
    <div style={{ background: "#F1F8E9", minHeight: "100vh", padding: "30px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          background: "#E8F5E9",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          border: "3px solid #C0EBA6",
        }}>
        <h2 style={{ textAlign: "center", color: "#2E7D32" }}> My Blog</h2>

        <textarea
          placeholder='Blog Title'
          rows='2'
          value={Title}
          onChange={handletitle}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "2px solid #AED581",
            marginBottom: "12px",
            outline: "none",
            background: "#F9FBE7",
          }}
        />

        <textarea
          placeholder='Blog Content'
          rows='6'
          value={Content}
          onChange={handlecontent}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "2px solid #AED581",
            marginBottom: "12px",
            outline: "none",
            background: "#F9FBE7",
          }}
        />

        <button
          type='submit'
          onClick={handlestore}
          style={{
            width: "100%",
            padding: "10px",
            background: "#C5E1A5",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#33691E",
          }}>
          Submit
        </button>
      </form>

      {/* Blog List */}
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        {Store.map((value, index) => (
          <div
            key={index}
            style={{
              background: "#F1F8E9",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "6px solid #AED581",
            }}>
            <div>
              <strong style={{ color: "#2E7D32" }}>{value.title}</strong>
              <p
                style={{ margin: "4px 0", fontSize: "14px", color: "#33691E" }}>
                {value.data}
              </p>
            </div>

            <span
              onClick={() => deleteBlog(index)}
              style={{
                cursor: "pointer",
                color: "#D32F2F",
                fontWeight: "bold",
                fontSize: "18px",
              }}>
              ✖
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
