import Image from "next/image";

interface StepCardProps {
  icon: "step-1" | "step-2" | "step-3";
  title: string;
  desc: string; 
}

export default function StepCard(props: StepCardProps) {
  const { icon, title, desc } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image src={`/icon/${icon}.svg`} alt={icon} width={80} height={80} className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          {title}
        </p>
        <p className="text-lg color-palette-1 mb-0">
          {desc}
        </p>
      </div>
    </div>
  );
}
