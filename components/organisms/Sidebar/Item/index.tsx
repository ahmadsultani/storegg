import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  title: string;
  active?: boolean;
  href?: string;
}

export default function Item(props: ItemProps) {
  const { title, active, href = "/member" } = props;
  const itemClass = classNames({
    "item mb-30": true,
    active,
  });
  return (
    <div className={itemClass}>
      <div className="me-3">
        <Image
          src={`/icon/sidebar-${title}.svg`}
          alt={title}
          width={25}
          height={25}
        />
      </div>
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
