import styled from "styled-components";

interface AppCardProps {
  image: string;
  imageAlt: string;
  liveServerLink: string;
  gitHubLink: string;
}

function AppCard({
  imageAlt,
  image,
  gitHubLink,
  liveServerLink,
}: AppCardProps) {
  return (
    <ApplicationCard>
      <ApplicationImage src={image} alt={imageAlt} />
      <HoverBox>
        <ButtonContainer>
          <LiveServerButton>Live Server</LiveServerButton>
          <GitHubButton>Github</GitHubButton>
        </ButtonContainer>
      </HoverBox>
    </ApplicationCard>
  );
}

export default AppCard;

const ApplicationImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const HoverBox = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--dark-mode);
  transition-duration: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 20px 10px 15px 10px;

  @media screen and (min-width: 1000px) {
    padding: 30px 30px 20px 30px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
  width: 100%;
`;

const LiveServerButton = styled.button`
  width: 75%;
  height: 40px;
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  transition-duration: 0.3s;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;

  @media screen and (min-width: 500px) {
    font-size: 18px;
  }

  &:hover {
    background-color: #e6786e;
  }
`;

const GitHubButton = styled(LiveServerButton)`
  background-color: #30363d;

  &:hover {
    background-color: #4b5158;
  }
`;

const ApplicationCard = styled.div`
  position: relative;
  max-width: 464px;
  width: 100%;
  margin-top: 2rem;
  cursor: pointer;
  box-shadow: 0 0.332071px 2.21381px rgb(0 0 0 / 1%),
    0 0.798012px 5.32008px rgb(0 0 0 / 3%),
    0 1.50259px 10.0172px rgb(0 0 0 / 4%), 0 2.68036px 17.869px rgb(0 0 0 / 5%),
    0 5.01331px 33.4221px rgb(0 0 0 / 6%), 0 12px 80px rgb(0 0 0 / 9%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${HoverBox} {
      opacity: 1;
    }
  }
`;
