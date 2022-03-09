import Button from "../../../../Components/Button";

type HeaderTasksProps = {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
};
const HeaderTasks = ({ title, onAdd, showAdd }: HeaderTasksProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "Red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default HeaderTasks;
