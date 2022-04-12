import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Nunito", "Open Sans", sans-serif;
  font-weight: 700;
  font: 1em;
  display: grid;
  grid-template-column: 1fr;
  grid-template-row: 100%;
  text-align: center;
  width: 100%;
  padding: 0 10px;
  margin: 20px auto;

  & * {
    display: flex;
    line-height: 1.2;
    justify-content: left;
    align-items: center;
  }
`;

export const FollowLabel = styled.div`
`;

export const AddressLabel = styled.div`
`;

export const BlogLinkLabel = styled.div`
  display: flex;

  a {
    font-family: "Nunito", "Open Sans", sans-serif;
  }
`;