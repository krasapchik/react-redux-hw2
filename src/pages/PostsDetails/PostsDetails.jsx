import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostsDetails = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading || !post ? (
        "Loading..."
      ) : (
        <div style={{ padding: "100px" }}>
          <button onClick={() => navigate("/posts")}>Back</button>
          <br />
          <b>
            {post.id} <br />
            {post.title}
          </b>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
