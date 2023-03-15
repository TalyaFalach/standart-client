import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import PostsComponent from "../../Components/PostsComponent/PostsComponent";
import { getUserPosts } from "./../../utils";

const UserProfilePage = () => {
  
  const [userPosts, setUserPosts] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserPosts(user.token, user.userId);
      setUserPosts([...data.posts]);
      console.log(userPosts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between bg-light mb-3">
        <hr />
        <NavBarLoginComponent />
        <hr />
      
       
      </div>
      {userPosts.map((post, index) => {
        return <PostsComponent key={index} post={post} />;
      })}
    </div>
  );
};

export default UserProfilePage;
