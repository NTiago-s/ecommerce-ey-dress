import { NavOption } from "@/types";
import Link from "next/link";

interface NavOptionsListProps {
  data: NavOption[];
  className?: string;
}

export default function NavOptionsList({
  data,
  className,
}: NavOptionsListProps) {
  return (
    <div className={className}>
      {data.map((option) => (
        <Link
          key={option.title}
          href={option.href}
          aria-label={option.title}
          className="text-primary-txt hover:shadow-inner hover:shadow-primary/50 hover:scale-110  p-2 rounded-xl transition"
        >
          {option.title}
        </Link>
      ))}
    </div>
  );
}
