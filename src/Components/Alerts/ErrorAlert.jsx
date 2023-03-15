import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
const ErrorAlert = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oops!</Alert.Heading>
          <p>something went wrong, Please try again </p>
        </Alert>
      ) : null}
    </div>
  );

}

export default ErrorAlert