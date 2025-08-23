interface CardInfoProps {
  title: string;
  description?: string;
}

export const CardInfo = ({ title, description }: CardInfoProps) => {
  return (
    <div className="case-panel-section">
      <h3>{title}</h3>
      {description && <p className="description">{description}</p>}
    </div>
  );
};
