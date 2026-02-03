import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="signin" className="list-group-item active border-0">
        Sign In
      </Link>
      <br />
      <Link href="signup" className="list-group-item text-danger border-0">
        Sign Up
      </Link>
      <br />
      <Link href="profile" className="list-group-item text-danger border-0">
        Profile
      </Link>
      <br />
    </div>
  );
}
