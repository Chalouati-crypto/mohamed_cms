import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutSideClick } from "../hooks/useOutSideClick";
import { cloneElement, createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
const variations = {
  fill: css`
    background-color: rgba(252, 252, 252, 1);
  `,
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;

  backdrop-filter: blur(4px);
  height: 100vh;
  transition: all 0.5s;
`;
const StyledModal = styled.div`
  position: fixed;
  padding: 4rem;
  min-width: 50rem;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0.7rem 2.4rem 3.2rem rgba(0, 0, 0, 0.25);
  width: 60vw;
  ${(props) => variations[props.variation]};
`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 4rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (opensWindowName) => setOpenName(opensWindowName);
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

function Window({ children, name }) {
  const { pathname } = useLocation();

  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={() => close()}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
