import React from "react";

class GetYear extends React.Component {
  render() {
    return <p style={{ color: `#ecf0f1`, marginTop: `0` }}>© the pages media 2018-{new Date().getFullYear()}.</p>;
  }
}

export default GetYear;
