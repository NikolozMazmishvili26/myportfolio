import styled from "styled-components";
import { HeaderItemDataProps } from "./HeaderLeftDropdown";

interface HeaderItemProps {
  item: HeaderItemDataProps;
}

function HeaderItem({ item }: HeaderItemProps) {
  const { image, imageAltValue, value } = item;

  return (
    <NavItem>
      <img src={image} alt={imageAltValue} />
      {value}
    </NavItem>
  );
}

export default HeaderItem;

const NavItem = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  text-transform: capitalize;
  color: var(--primary-color);
  margin-top: 0.75rem;
  cursor: pointer;
`;
