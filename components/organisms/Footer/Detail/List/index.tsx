import Link from "next/link";

interface FooterDetailITemProps {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

export default function FooterDetailList(props: FooterDetailITemProps) {
  const { title, items } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li className="mb-6" key={`footer-item-${index}`}>
            <Link
              href={item.href}
              className="text-lg color-palette-1 text-decoration-none"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
