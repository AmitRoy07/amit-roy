const GridDotBackground = ({ className = "", theme = "light" }) => {
  return (
    <div
      aria-hidden="true"
      className={`grid-dot-background grid-dot-background--${theme} pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="grid-dot-background__grid" />
      <div className="grid-dot-background__fade" />
    </div>
  );
};

export default GridDotBackground;
