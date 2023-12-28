import React from "react";
import Button from "./Button";

function ButtonsContainer({ handleClick, operatorClick, handleEqual }) {
  return (
    <div className="btn-wrapper">
      <div className="btn-container">
        <Button handleClick={handleClick} name={1} value={1} />
        <Button handleClick={handleClick} name={2} value={2} />
        <Button handleClick={handleClick} name={3} value={3} />
        <Button
          handleClick={() => operatorClick("+")}
          className="colored-btn"
          name={"+"}
          value={"+"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={4} value={4} />
        <Button handleClick={handleClick} name={5} value={5} />
        <Button handleClick={handleClick} name={6} value={6} />
        <Button
          handleClick={() => operatorClick("-")}
          className="colored-btn"
          name={"-"}
          value={"-"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={7} value={7} />
        <Button handleClick={handleClick} name={8} value={8} />
        <Button handleClick={handleClick} name={9} value={9} />
        <Button
          handleClick={() => operatorClick("*")}
          className="colored-btn"
          name={"*"}
          value={"*"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={0} value={0} />
        <Button
          className="span-two colored-btn"
          handleClick={handleEqual}
          name={"="}
          value={"="}
        />
        <Button
          handleClick={() => operatorClick("/")}
          className="colored-btn"
          name={"/"}
          value={"/"}
        />
      </div>
    </div>
  );
}

export default ButtonsContainer;
