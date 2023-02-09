import React from "react";
import Item from "./Item";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings';
}


export default function Sidebar(props : SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <Item title="Overview" active={activeMenu === "overview"} />
          <Item title="Transactions" active={activeMenu === "transactions"} href="/member/transactions"/>
          <Item title="Messages" href="/member/messages"/>
          <Item title="Card" />
          <Item title="Rewards" />
          <Item title="Settings" href="/member/edit-profile" active={activeMenu === "settings"}/>
          <Item title="Log Out" href="/member/sign-in" />
        </div>
      </div>
    </section>
  );
}
