import styled from "styled-components/macro";

export const Container = styled.div``;
export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background: transparent;
  cursor: pointer;
  border: 0;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 10px;
    top: 0;
    width: 22px;
    height: 22px;
    content: "";
    background: #333;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;
