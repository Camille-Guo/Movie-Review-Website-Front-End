import React from "react";

import Layout from "../layout/Layout";

function NoPage() {
  return (
    <Layout>
      <div className="container" style={{ width: "80%", marginLeft: "18%" }}>
        <div className="error">Error 404! Invalid URL!</div>
      </div>
    </Layout>
  );
}

export default NoPage;
