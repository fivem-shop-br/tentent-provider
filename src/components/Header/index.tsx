import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "./styles.css";
import { List, X } from "phosphor-react";
import { NavBar } from "./components/NavBar";
import { useScroll } from "@src/hooks/useScroll";
import { useOutsideClick } from "@src/hooks/useOutsideClick";
import { ShopsProps } from "@src/pages/index.page";
import DefaultLogo from "@src/source/default-logo.svg";

const mobileNavIconStyled: React.CSSProperties = {
  position: "absolute",
  right: "0",
  top: "15px",
  flex: 1,
};

export function Header({ logo, slug }: ShopsProps) {
  const NavRef = useRef(null);
  const { isScrolled } = useScroll();
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav((state) => !state);
  }

  useOutsideClick(NavRef, () => {
    setMobileNav(false);
  });

  const MobileNavIcon = mobileNav ? X : List;

  return (
    <Container scrolled={isScrolled} mobileNav={mobileNav}>
      <section ref={NavRef}>
        <Link href="/">
          {logo ? (
            <Image src={logo} alt="Logo" width={62} height={62} />
          ) : (
            <Image src={DefaultLogo} alt="Logo Padrão" />
          )}
        </Link>
        <NavBar slug={slug} />
        <MobileNavIcon
          size={24}
          style={mobileNavIconStyled}
          onClick={handleMobileNav}
        />
      </section>
    </Container>
  );
}
