import usersIcon from "../../images/icons/user_icon.svg"
import './UsersEach.scss'

const UsersEach = ({item}) => {
  return (
    <li className="user">
      <img src={usersIcon} alt="иконка юзера" width={15} height={15} className="user__image"/>
      <span className="user__name">{item.name}</span>
    </li>
  )
}

export default UsersEach
