import Image from "next/image";
import classNames from "classnames";

interface TableRowProps {
  category: string;
  price: number;
  title: string;
  item: string;
  status: "Success" | "Pending" | "Failed";
  icon: string;
}

export default function TableRow(props: TableRowProps) {
  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(price);
  };
  const { category, price, title, item, status, icon } = props;
  const statusClass = classNames({
    "float-start icon-status" : true,
    "success" : status === "Success",
    "pending" : status === "Pending",
    "failed" : status === "Failed",
  })

  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/overview-${icon}.png`}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{formatPrice(price)}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
