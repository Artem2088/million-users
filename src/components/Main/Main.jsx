import { Sidebar, UserRedactForm } from "../index";
import "./Main.scss";

const Main = () => {
  return (
    <main className="content">
      <Sidebar />
      <UserRedactForm/>
    </main>
  );
};

export default Main;
