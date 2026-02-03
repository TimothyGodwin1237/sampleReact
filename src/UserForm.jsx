import ManualForm from "./ManualForm";
import UsingRHF from "./UsingRHF";

const UserForm = () => {
  return (
    <div>
      <div>
        <h1>FORM USING RHF</h1>
        <UsingRHF />
      </div>

      <div>
        <h1>MANUAL FORM</h1>
        <ManualForm />
      </div>
    </div>
  );
};

export default UserForm;
