import React from "react";
function Card({ children, classNa, onClic }: any) {
  if (classNa)
    return (
      <div onClick={onClic} className={`card ${classNa}`}>
        {children}
      </div>
    );
  return (
    <div onClick={onClic} className={`card`}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
