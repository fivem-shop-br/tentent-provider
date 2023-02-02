import Link from "next/link";
import { User } from "phosphor-react";
import { Button } from "@fivem-shop/react";

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

export function NavBar() {
  return (
    <nav>
      {navLinks.map((index, key) => (
        <a href={index.href} key={key}>
          {index.name}
        </a>
      ))}
      <div>
        <Button mode="primary" asChild>
          <a href="#plans">PLANOS</a>
        </Button>

        <Button
          mode="secondary"
          hoverColor="$gray-500"
          backgroundColor="$gray-600"
          asChild
        >
          <Link href="/auth/login">
            <User weight="bold" />
            LOGIN
          </Link>
        </Button>
      </div>
    </nav>
  );
}
