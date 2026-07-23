type SidebarCardProps = {
  title: string;
  icon?: string;
  children: React.ReactNode;
};

function SidebarCard({
  title,
  icon,
  children,
}: SidebarCardProps) {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-header">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>

      <div className="sidebar-card-body">
        {children}
      </div>
    </div>
  );
}

export default SidebarCard;
