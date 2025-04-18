import { UsersLists } from "../index";
import "./Sidebar.scss";

const Sidebar = ({setIsTarget}) => {
  return (
    <section className="sidebar">
      <UsersLists setIsTarget={setIsTarget}/>
    </section>
  )
}

export default Sidebar
