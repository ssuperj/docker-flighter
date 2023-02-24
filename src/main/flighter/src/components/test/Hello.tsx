import { useEffect } from "react";
import instance from "../../utils/instance";

const Login = () => {
  useEffect(() => {
    /*     // Query 요청의 경우
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "{ userBlogList { blogId, userId } }" }),
    }).then((response) => response.json());

    // Mutation 요청의 경우
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "mutation { createBlog { blogId, userId } }" }),
    }).then((response) => response.json()); */
    // console.log(token);
    // fetch("/graphql", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ query: "{ getMember }" }),
    // })
    //   .then((response) => response.json())
    //   .then((text) => {
    //     console.log(text);
    //   });

    instance
      .post("/test")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <></>;
};
export default Login;
