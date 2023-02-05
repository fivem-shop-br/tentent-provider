import Link from "next/link";
import { ShoppingCart, User } from "phosphor-react";
import { Button } from "@fivem-shop/react";
import { useQuery } from "react-query";
import { api } from "@src/services/api-client";
const navLinks = [
  {
    href: "/#features",
    name: "RECURSOS",
  },
  {
    href: "/#band",
    name: "STATUS",
  },
  {
    href: "/#",
    name: "SOBRE",
  },
];

interface NavBarProps {
  slug: string;
}

export interface CategoryProps {
  id: string;
  shopSlug?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export function NavBar({ slug }: NavBarProps) {
  const { data: categories } = useQuery<CategoryProps[]>(
    "categories",
    async () => {
      const { data } = await api.get("categories/" + slug);
      return data;
    }
  );

  return (
    <nav>
      {categories &&
        categories.map((index, key) => (
          <Link href={index.id} key={key}>
            {index.name}
          </Link>
        ))}
      <div>
        <Button mode="primary" asChild>
          <Link href="/auth/login">
            <ShoppingCart weight="bold" />
            CARRINHO
          </Link>
        </Button>
      </div>
    </nav>
  );
}
