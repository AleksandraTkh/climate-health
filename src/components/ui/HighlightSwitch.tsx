import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

interface HighlightSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const HighlightSwitch: React.FC<HighlightSwitchProps> = ({
  isOn,
  handleToggle,
}) => {
  return (
    <Form className="switch">
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Show all zones"
        checked={isOn}
        onChange={handleToggle}
        className="mb-3"
      />
    </Form>
  );
};

export default HighlightSwitch;
