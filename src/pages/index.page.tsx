import { getShop } from "@src/utils/get-shop";
export { default } from "./home";

export interface ShopsProps {
  id: string;
  owner_id: string;
  slug: string;
  name: string;
  description?: string;
  logo?: string;
  banner?: string;
  favicon?: string;
  primary_color?: string;
  secondary_color?: string;
  domain: string;
  plan_type: string;
  createdAt: Date;
  updatedAt: Date;
}

export const getServerSideProps = getShop();
