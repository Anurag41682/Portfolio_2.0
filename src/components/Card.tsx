import "./card.css";
import React, { ReactNode } from "react";
interface CardProps {
  className?: string;
  children: ReactNode;
}
const Card: React.FC<CardProps> = ({ className, children }) => {
  return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
