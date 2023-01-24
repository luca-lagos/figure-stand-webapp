import { Link } from "react-router-dom";
export default function Figure({ item }) {
  return (
    <div>
      <Link to={"edit/" + item.id}>
        {item.name}
        <img src={item.picture} alt="" width={250}/>
      </Link>
    </div>
  );
}
