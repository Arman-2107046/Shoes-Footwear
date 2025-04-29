import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="">
      <h2 className="sidebar-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value=""
          name="text3"
        />
        <span
          className="checkmark all"
          
        ></span>
        All
      </label>
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        color="blue"
        name="text3"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        color="red"
        name="text3"
      />

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        color="black"
        name="text3"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        color="green"
        name="text3"
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="text3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
