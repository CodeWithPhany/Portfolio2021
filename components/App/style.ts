import styled from "@emotion/styled";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  background-color: #20b2aa;
  font-family: Helvetica, "sans serif";
`;

export const Button = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  color: #20b2aa;
  padding: 25px;
  border-radius: 40px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  justify-content: space-between;
`;

export const TextView = styled.h1`
  margin: 20px;
  font-size: 65px;
`;

export const TextTitle = styled.h2`
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 20px;
  position: relative;
`;
