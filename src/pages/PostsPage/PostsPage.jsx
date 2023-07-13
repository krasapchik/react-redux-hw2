import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./PostsPage.module.css";
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className={classes.box}>
      {loading || !posts.length
        ? "loading..."
        : posts?.map((el) => {
            return (
              <div key={el.id} className={classes.post}>
                <div className={classes.div}>
                  <button onClick={() => navigate(`/posts/${el.id}`)}>
                    Details
                  </button>
                </div>
                <b>{el.id}</b>
                <br />
                <b>{el.title} </b>
                <div className={classes.con}>
                  {" "}
                  <div className={classes.body}>{el.body}</div>
                  <Link to={`/posts/${el.id}`}> More... </Link>{" "}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default PostsPage;
