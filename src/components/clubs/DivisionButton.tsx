interface DivisionButtonProps {
  division: string;
  activeDivision: string;
  changeDivision: (changeDivision: string) => void;
}

const DivisionButton = (props: DivisionButtonProps) => {
  let classes = "text-sm text-white cursor-pointer font-PyeongChang";
  if (props.division === props.activeDivision) {
    classes =
      "text-sm text-white cursor-pointer font-PyeongChang text-glow-hard glow-underline";
  }
  return (
    <div
      onClick={() => props.changeDivision(props.division)}
      className={classes}
    >
      {props.division}
    </div>
  );
};

export default DivisionButton;
