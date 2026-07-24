type ControlGroupProps = {
  label: string;
  value?: string;
  children: React.ReactNode;
};

function ControlGroup({
  label,
  value,
  children,
}: ControlGroupProps) {
  return (
    <div className="control-group">
      <div className="control-header">
        <label className="control-label">
          {label}
        </label>

        {value && (
          <span className="control-value">
            {value}
          </span>
        )}
      </div>

      {children}
    </div>
  );
}

export default ControlGroup;