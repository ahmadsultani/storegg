import FooterDetailList from "./List";

export default function FooterDetail() {
  const CompanyItems = [
    {
      name: "About Us",
      href: "/",
    },
    {
      name: "Press Release",
      href: "/",
    },
    {
      name: "Terms of Use",
      href: "/",
    },
    {
      name: "Privacy & Policy",
      href: "/",
    },
  ];

  const SupportItems = [
    {
      name: "Refund Policy",
      href: "/",
    },
    {
      name: "Unlock Rewards",
      href: "/",
    },
    {
      name: "Live Chatting",
      href: "/",
    },
  ];

  const ConnectItems = [
    {
      name: "hi@store.gg",
      href: "mailto: hi@store.gg",
    },
    {
      name: "team@store.gg",
      href: "mailto: team@store.gg",
    },
    {
      name: "Pasific 12, Jakarta Selatan",
      href: "http://maps.google.com/?q=Pasific 12, Jakarta Selatan",
    },
    {
      name: "02111229090",
      href: "tel: 02111229090",
    },
  ];

  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <FooterDetailList title="Company" items={CompanyItems} />
        <FooterDetailList title="Support" items={SupportItems} />
        <FooterDetailList title="Connect" items={ConnectItems} />
      </div>
    </div>
  );
}
