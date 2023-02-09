import classnames from "classnames";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface AuthProps {
  isLogin?: boolean;
  handleLogin?: () => void;  
}

export default function Auth(props: AuthProps) {
  const { isLogin, handleLogin } = props;

  const [show, setShow] = useState(false);
  
  const classDropdown = classnames({
    "dropdown-menu border-0": true,
    show,
  });
  
  const handleDropdown = () => {
    setShow(!show);
  };
  
  return isLogin ? (
    <li className="nav-item my-auto dropdown d-flex">
      <div className="vertical-line d-lg-block d-none" />
      <div>
        <a
          href="#"
          className="dropdown-toggle ms-lg-40"
          role="button"
          onClick={handleDropdown}
        >
          <Image
            src="/img/avatar-1.png"
            className="rounded-circle"
            width="40"
            height="40"
            alt=""
          />
        </a>

        <ul className={classDropdown}>
          <li>
            <Link href="/member" className="dropdown-item text-lg color-palette-2">
              My Profile
            </Link>
          </li>
          <li>
            <Link href="/" className="dropdown-item text-lg color-palette-2">
              Wallet
            </Link>
          </li>
          <li>
            <Link href="/member/edit-profile" className="dropdown-item text-lg color-palette-2">
              Account Settings
            </Link>
          </li>
          <li>
            <Link onClick={handleLogin} href="/sign-in" className="dropdown-item text-lg color-palette-2">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </li>
  ) : (
    <li className="nav-item my-auto">
      <Link
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/sign-in"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
