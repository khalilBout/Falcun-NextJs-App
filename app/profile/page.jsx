import AddPost from "../components/Profile/AddPost";
import AddProfile from "../components/Profile/AddProfile";

export default function Profile() {
  return (
    <div className="screenPadding w-screen bg-lime-300 ">
      <h1 className="text-2xl">Profile page</h1>
      {/* if user don't have Profile must add one   */}
      <AddProfile />
      {/* if user have Profile can add Post   */}
      <AddPost />
    </div>
  );
}
