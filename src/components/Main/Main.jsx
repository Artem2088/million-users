import { useState } from "react";
import { Sidebar, UserRedactForm } from "../index";
import "./Main.scss";
import { useGetUserQuery } from "../../store/usersApi";

const Main = () => {
  const [target, setIsTarget] = useState(" ");

  const { data: user, isLoading, isError } = useGetUserQuery(target);

  if (isLoading) return <div>Loading....</div>;

  if (isError) return <div>{isError}</div>;

  return (
    <main className="content">
      <Sidebar setIsTarget={setIsTarget} />
      <UserRedactForm user={user} />
    </main>
  );
};

export default Main;
