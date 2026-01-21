import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="signin">SignIn</Link> <br />
      <Link href="signup">SignUp</Link> <br />
      <Link href="profile">Profile</Link> <br />
    </div>
  );
}
