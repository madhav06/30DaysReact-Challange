import React from "react";
import PropTypes from "prop-types";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  render() {
    return (
      <div>
        <div className="panel-heading">
          <h2>Hello</h2>
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  title: PropTypes.string,
};

export default Collapsible;
