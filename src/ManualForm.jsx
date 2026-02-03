import React, { useState } from "react";

const ManualForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const [errorState, setErrorState] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e, key) => {
    if (key === "firstName") {
      setFormValues((prev) => ({
        ...prev,
        firstName: e.target.value,
      }));
    } else if (key === "lastName") {
      setFormValues((prev) => ({
        ...prev,
        lastName: e.target.value,
      }));
    }
  };

  const onSubmit = () => {
    const { firstName, lastName } = formValues;

    if (firstName.length === 0 && lastName.length === 0) {
      setErrorState(() => ({
        firstName: "First Name is Required 32",
        lastName: "Last Name is Required 33",
      }));
      return;
    }

    if (firstName.length === 0 && lastName.length !== 0) {
      setErrorState(() => ({
        firstName: "First Name is Required 39",
        lastName: "",
      }));
      return;
    }
    if (lastName.length === 0 && firstName.length !== 0) {
      setErrorState(() => ({
        firstName: "",
        lastName: "Last Name is Required 46",
      }));
      return;
    }

    if (firstName.length > 0 && lastName.length > 0) {
      setErrorState(() => ({
        firstName: "",
        lastName: "",
      }));
      console.log("Form Submitted : ", formValues);
    }
  };

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          value={formValues.firstName}
          onChange={(e) => handleChange(e, "firstName")}
        />
        {errorState.firstName && <p>{errorState.firstName}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          value={formValues.lastName}
          onChange={(e) => handleChange(e, "lastName")}
        />
        {errorState.lastName && <p>{errorState.lastName}</p>}
      </div>

      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
};

export default ManualForm;
