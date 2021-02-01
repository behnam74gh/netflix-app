import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 660px;
  width: 100%;
  max-width: 450px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60px 68px 40px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Err = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const SmallText = styled.p`
  font-size: 13px;
  color: #8c8c8c;
  line-height: normal;
  margin-top: 10px;
`;

export const Link = styled(LinkR)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Input = styled.input`
  background: #333;
  color: white;
  border-radius: 4px;
  border: 0;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50904;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  padding: 16px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  margin: 24px 0 12px;

  &:disabled {
    opacity: 0.5;
  }
`;
