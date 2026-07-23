type ControlGroupProps = {
  label: string;
  children: React.ReactNode;
};

function ControlGroup({
  label,
  children,
}: ControlGroupProps) {
  return (
    <div className="control-group">
      <label className="control-label">
        {label}
      </label>

      {children}
    </div>
  );
}

export default ControlGroup;