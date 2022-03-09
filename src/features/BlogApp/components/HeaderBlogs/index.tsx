import Button from "../../../../Components/Button";
import "./HeaderBlogs.scss";

type HeaderBlogsProps = {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
};
const HeaderBlogs = ({ title, onAdd, showAdd }: HeaderBlogsProps) => {
  return (
    <div className="headerblog">
      <div className="headerblog__titles">
        <span className="headerblog__titles--sm">React & TS</span>
        <span className="headerblog__titles--lg">{title}</span>
      </div>
      <img
        className="headerblog__img"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <Button
        color={showAdd ? "#e43f33" : "#66bb6a"}
        text={showAdd ? "Close" : "Create new blog"}
        onClick={onAdd}
      />
    </div>
  );
};

export default HeaderBlogs;
