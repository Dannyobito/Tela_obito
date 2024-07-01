import { Route, useNavigate, useSearchParams } from "react-router-dom";

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  console.log(code);

  return (
    <div>
      {/* Optional: Display a message while processing */}
      <p>Processing Google Sign-in...</p>
    </div>
  );
};

export default Redirect;
