interface EnterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  sortBy: string;
  value: string;
}
const SortButton = (props: EnterButtonProps) => {
  let styles =
    " mr-2 cursor-pointer w-30 rounded-lg bg-black/50 text-white p-2 text-center";
  if (props.sortBy === props.value) {
    styles =
      " mr-2 cursor-pointer w-30 rounded-lg bg-slate-200 text-black p-2 text-center";
  }
  return (
    <button onClick={props.onClick} className={styles}>
      {props.children}
    </button>
  );
};

export default SortButton;
