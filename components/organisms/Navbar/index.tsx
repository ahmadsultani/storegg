import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Auth from "./Auth";
import Menu from "./Menu";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src="/icon/logo.svg" alt="logo" width={60} height={60} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavContent"
            aria-controls="navbarNavContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavContent">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active={true} />
              <Menu title="Games" href="/games" />
              <Menu title="Rewards" href="/rewards" />
              <Menu title="Discover" />
              <Menu title="Global Rank" />
              <Auth isLogin={isLogin} handleLogin={handleLogin} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
