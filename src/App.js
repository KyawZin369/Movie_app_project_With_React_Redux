import React from "react";
import { Alert } from "flowbite-react";

const App = () => {
  return (
    <div>
      <Alert color="success" onDismiss={() => alert("Alert dismissed!")}>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
    </div>
  );
};

export default App;
