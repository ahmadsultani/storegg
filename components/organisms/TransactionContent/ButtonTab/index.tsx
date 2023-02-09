import Link from "next/link";
import classNames from "classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
  dataFilter: string;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, dataFilter } = props;
  const buttonClass = classNames({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active === true,
  });
  return (
    <Link
      data-filter={dataFilter}
      href="#"
      className={buttonClass}
    >
      {title}
    </Link>
  );
}
