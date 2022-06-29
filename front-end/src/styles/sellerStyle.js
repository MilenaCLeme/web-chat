import styled from 'styled-components';

const ButtonChat = styled.button`

`;

const MainSeller = styled.main`
  display: flex;
  height: 100vh;
`;

const AsideSeller = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  flex-basis: 40%;

  button {
    width: auto;
    margin: 0;
    margin-bottom: 2px;
    :hover {
      background-color: #666;
    }
  }
`;

const SectionSeller = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 60%;
  justify-content: center;

  h2 {
    margin: 2px;
    padding: 8px;
    color: #666;
    border: 1px solid;
    border-radius: 10px;
  }
`;

const InputWithButton = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  p {
    font-size: xx-large;
    border: 1px solid;
    padding: 16px;
    border-radius: 10px;
    font-weight: 600;
    color: #666;
  }
`;

export {
  ButtonChat,
  MainSeller,
  AsideSeller,
  SectionSeller,
  InputWithButton,
  Info,
};
