import { BiHomeAlt, BiCategoryAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <BiHomeAlt />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <AiOutlineUnorderedList />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <BiCategoryAlt />,
  },
  {
    id: 4,
    label: "Orders",
    route: "orders",
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 5,
    label: "Users",
    route: "users",
    icon: <BiUserCircle />,
  },
];
