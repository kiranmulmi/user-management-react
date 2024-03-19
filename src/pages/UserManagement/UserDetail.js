import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return (
    <div>
      User detail page {userId}
    </div>
  )
}

export default UserDetail;