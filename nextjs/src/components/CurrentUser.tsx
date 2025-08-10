import { currentUser } from "@clerk/nextjs/server";

const CurrentUser = async () => {
  const user = await currentUser();

  if (!user) return <div>Nicht eingeloggt</div>;

  return <div>{user?.firstName}</div>;
};

export default CurrentUser;
