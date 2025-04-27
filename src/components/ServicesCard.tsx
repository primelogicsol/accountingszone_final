import { IconType } from "react-icons";

type CardProps = {
  title: string;
  icon: IconType;
  iconClassName?: string;
};

export default function ServicesCard({
  title,
  icon: Icon,
  iconClassName,
}: CardProps) {
  return (
    <div
      className="max-w-lg bg-gray-50 flex p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
      data-aos="fade"
    >
      <Icon className={iconClassName} />
      <span className="text-lg lg:text-xl font-semibold text-gray-800">
        {title}
      </span>
    </div>
  );
}
