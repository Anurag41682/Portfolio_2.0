import "./card.css";
import React, { CSSProperties, ReactNode } from "react";
interface CardProps {
  className?: string;
  children: ReactNode;
  // Position in a list, used to stagger entrance animations.
  index?: number;
}
const Card: React.FC<CardProps> = ({ className, children, index }) => {
  return (
    <article
      className={`card ${className}`}
      style={index !== undefined ? ({ "--i": index } as CSSProperties) : undefined}
    >
      {children}
    </article>
  );
};

export default Card;
