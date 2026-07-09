import "../styles/ScriptCard.css";

function ScriptCard({ role, onClick }) {
  const { title, description, icon, color, category } = role;

  return (
    <div 
      className="script-card" 
      onClick={onClick}
      style={{ "--accent-color": color }}
    >
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <span className="card-category" style={{ backgroundColor: `${color}15`, color: color }}>
          {category}
        </span>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span className="view-link" style={{ color: color }}>
          Get Script <span className="arrow">→</span>
        </span>
      </div>
    </div>
  );
}

export default ScriptCard;
