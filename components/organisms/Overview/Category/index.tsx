import Image from "next/image";

interface CategoryProps {
  children: React.ReactNode;
  category: string;
  nominal: number;
}

export default function Category(props: CategoryProps) {
  const { nominal, children, category } = props;
  const formatNominal = (nominal: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(nominal);
  };
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/category-${category}.svg`} alt={category} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">
            {children}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {formatNominal(nominal)}
          </p>
        </div>
      </div>
    </div>
  );
}
