import React, { useState } from "react";
import { useCallback } from "react";
import styled from "@emotion/styled";
import { Dropdown, useDropdownMenu, useDropdownToggle } from "react-overlays";
import { MButton } from "../MButton";

type MenuProps = AppCommonChild & {
  Icon: React.ReactNode;
  ToggleComponent?: React.FC<any>;
  MenuListComponent?: React.FC<any>;
  MenuContainerComponent?: AppStyledComponent<any>;
};

export const MenuMenuContainer = styled.div<{ show: boolean }>(
  ({ theme, show }) => ({
    display: show ? "flex" : "none",
    zIndex: theme.zIndex.menu,
    transition: "box-shadow 03s ease",
  })
);

const MenuListMenu = ({ children }: AppCommonChild) => {
  const [menuProps, { show }] = useDropdownMenu({
    flip: true,
    offset: [0, 24],
  });
  return (
    <MenuMenuContainer {...menuProps} role="menu" show={show}>
      {children}
    </MenuMenuContainer>
  );
};

const MenuToggle = ({ Icon }: { Icon: any }) => {
  const [props, { toggle }] = useDropdownToggle();

  return (
    <MButton {...props} onClick={() => toggle(false)}>
      {Icon}
    </MButton>
  );
};

const BSMenuContainer = styled.div({
  position: "relative",
});
export const MenuSelectInput = ({
  Icon,
  MenuContainerComponent = BSMenuContainer,
  ToggleComponent = MenuToggle,
  MenuListComponent = MenuListMenu,
  children,
  ...props
}: MenuProps) => {
  const [show, setShow] = useState(false);
  const onToggle = useCallback(() => {
    setShow((prevProps) => !prevProps);
  }, []);

  return (
    <Dropdown
      {...props}
      drop="down"
      show={show}
      onToggle={onToggle}
      itemSelector="button:not(:disabled)"
    >
      <MenuContainerComponent {...props}>
        <ToggleComponent Icon={Icon} />
        <MenuListComponent>{children}</MenuListComponent>
      </MenuContainerComponent>
    </Dropdown>
  );
};
