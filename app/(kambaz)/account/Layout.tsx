"use client";
import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  console.log("AccountLayout rendering");
  try {
    return (
      <div id="wd-kambaz-account-layout">
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <AccountNavigation />
              </td>
              <td valign="top" width="100%">
                {children}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } catch (err) {
    console.error("AccountLayout error:", err);
    return <>{children}</>;
  }
}
