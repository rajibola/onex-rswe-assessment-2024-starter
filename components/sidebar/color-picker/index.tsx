export const ColorPicker = ({
  colors,
  onChange,
  currentColor,
}: {
  onChange: (value: string) => void;
  currentColor: string;
  colors: {
    name: string;
    value: string;
  }[];
}) => {
  return (
    <div className="flex gap-2">
      {colors.map(({ name, value }) => (
        <div
          key={name}
          className={`h-9 w-9 ${
            currentColor === name && "border"
          } grid place-items-center rounded-full border-evGreen`}
        >
          <div
            style={{ backgroundColor: value }}
            className="w-7 h-7 rounded-full border"
            onClick={() => onChange(name)}
          />
        </div>
      ))}
    </div>
  );
};
