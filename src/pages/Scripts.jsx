import { useState } from "react";
import { scriptsData } from "../data/scripts";
import ScriptCard from "../components/ScriptCard";
import "../styles/Scripts.css";

function Scripts({ navigateTo }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "Meeting Leaders", "Meeting Helpers", "Evaluators"];

  const filteredRoles = scriptsData.filter((role) => {
    const matchesCategory = selectedCategory === "all" || role.category === selectedCategory;
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="scripts-page animate-fade-in">
      <div className="scripts-header">
        <div className="header-container">
          <span className="badge">Meeting Roles</span>
          <h1>Select Your Role</h1>
          <p>Access customized speech templates, role guidelines, and interactive utility tools designed for meeting helpers and leaders.</p>

          <div className="filter-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search roles (e.g. Timer, Grammarian)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "all" ? "All Roles" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scripts-container">
        {filteredRoles.length > 0 ? (
          <div className="roles-grid animate-fade-in">
            {filteredRoles.map((role) => (
              <ScriptCard
                key={role.id}
                role={role}
                onClick={() => navigateTo("script", role.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span className="no-results-icon">🔍</span>
            <h3>No matching roles found</h3>
            <p>Try checking your spelling or selecting another category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scripts;
