import UserProfile from "./UserProfile";

const UserProfileContent = ({ id }) => {
  return (
    <div className="flex flex-col gap-4">
      <UserProfile id={id} />
    </div>
  );
};

export default UserProfileContent;
