import Image from "next/image";
import Link from "next/link";
import { Container, ProductImage } from "./styles.css";

export interface ProductProps {
  id: string;
  categoryId: string;
  name: string;
  image: string[];
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export function Product({ image, price, name }: ProductProps) {
  return (
    <Container>
      <Link href="/">
        <section>
          <ProductImage src={image[0]} alt={name} width={1920} height={1080} />
        </section>
        <div>
          <span>{name}</span>
          <span>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button>COMPRAR</button>
      </Link>
    </Container>
  );
}
