import styled from "styled-components";
import { SkillsBoxDataProps } from "./Service";

interface ServiceSkillsBoxProps {
  item: SkillsBoxDataProps;
}

function ServiceSkillsBox({ item }: ServiceSkillsBoxProps) {
  const { title, description } = item;

  return (
    <SkillsBox>
      <SkillsTitle>{title}</SkillsTitle>
      <SkillsDescription>{description}</SkillsDescription>
    </SkillsBox>
  );
}

export default ServiceSkillsBox;

const SkillsBox = styled.div``;

const SkillsTitle = styled.h1`
  font-size: 18px;
  text-align: center;
  color: var(--primary-color);
  font-weight: 700;
`;
const SkillsDescription = styled.div`
  margin-top: 0.75rem;
  font-size: 16px;
  color: var(--primary-color);
  line-height: 1.5;
  text-align: center;

  @media screen and (min-width: 750px) {
    margin-top: 1rem;
    font-size: 16.3px;
  }
`;
