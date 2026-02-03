import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>
      <FormControl placeholder="Username" className="mb-2" />
      <FormControl type="password" placeholder="Password" className="mb-2" />
      <FormControl
        type="password"
        placeholder="Verify Password"
        className="mb-2"
      />
      <br />
      <Link
        id="wd-signup-link"
        href="profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <br />
      <Link id="wd-signin-link" href="signin">
        Sign in
      </Link>
    </div>
  );
}
