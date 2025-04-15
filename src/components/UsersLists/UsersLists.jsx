import { useGetAllUsersQuery } from "../../store/usersApi";
import { UsersEach } from "../index"
import "./UsersLists.scss";

const UsersLists = () => {
  const { data = [], isLoading, error } = useGetAllUsersQuery();
  console.log(data)

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Error</h1>

  return (
    <ul className="users-lists">
      {data.map(item => (
        <UsersEach item={item} key={item.id}/>
      ))}
    </ul>
  )
}

export default UsersLists
