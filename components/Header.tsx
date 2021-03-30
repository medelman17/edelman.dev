import * as React from "react";
import { Heading, Flex, Box, Text } from "@chakra-ui/react";
import { CloseIcon as CI, MenuIcon as OI } from "./Icons";
import { GlobalNavMenuItem } from "../hooks";
import Link from "next/link";

export interface HeaderProps {
  navItems: GlobalNavMenuItem[];
  toggleMobileNavigationMenu: (e: React.SyntheticEvent) => void;
  doShowMobileNavigationMenu: boolean;
  titleText: string;
}

function getDataAttributes(props: { text: string; url: string }) {
  return {
    "data-amplify-analytics-touchable-type": "Link",
    "data-amplify-analytics-touchable-function": "GlobalNavigation",
    "data-amplify-analytics-touchable-text": props.text,
    "data-amplify-analytics-touchable-url": props.url,
  };
}

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <a {...getDataAttributes({ text: children, url: to })}>
        <Text
          mt={{ base: 4, md: 0 }}
          mr={6}
          letterSpacing={"-.05rem"}
          display="block"
          color={["white", "white", "primary.500"]}
        >
          {children}
        </Text>
      </a>
    </Link>
  );
};

const HeaderTitleBlock = (props: { title }) => {
  return (
    <Flex align="center" mr={8}>
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        <Link href={"/"}>
          <a className={"h-card"} rel={"me"}>
            {props.title}
          </a>
        </Link>
      </Heading>
    </Flex>
  );
};

const HeaderNavigationMenuToggle = (props: {
  onClick: (e: React.SyntheticEvent) => void;
  isToggled: boolean;
  OpenIcon: React.ReactNode;
  CloseIcon: React.ReactNode;
}) => {
  const { onClick, isToggled, OpenIcon, CloseIcon } = props;
  return (
    <Box display={{ base: "block", md: "none" }} onClick={onClick}>
      {isToggled ? CloseIcon : OpenIcon}
    </Box>
  );
};

const HeaderNavigationMenuItemList = (props: {
  isMobile: boolean;
  navItems: GlobalNavMenuItem[];
}) => {
  function renderMenuItem(
    item: GlobalNavMenuItem,
    index: number,
    list: GlobalNavMenuItem[]
  ) {
    return (
      <MenuItem key={item._id} to={`/${item.slug.current}`}>
        {item.pageTitle}
      </MenuItem>
    );
  }

  return (
    <Box
      display={{
        base: props.isMobile ? "block" : "none",
        md: "flex",
      }}
      width={{ base: "full", md: "auto" }}
      alignItems="center"
      flexGrow={1}
    >
      {props.navItems.map(renderMenuItem)}
    </Box>
  );
};

const HeaderNavigationBlock = (props: {
  doShowMobileNavigation: boolean;
  navItems: GlobalNavMenuItem[];
  toggleMobileNavigationMenu: (e: React.SyntheticEvent) => void;
}) => {
  const {
    doShowMobileNavigation,
    toggleMobileNavigationMenu,
    navItems,
  } = props;
  return (
    <>
      <HeaderNavigationMenuToggle
        onClick={toggleMobileNavigationMenu}
        isToggled={doShowMobileNavigation}
        OpenIcon={<OI />}
        CloseIcon={<CI />}
      />
      <HeaderNavigationMenuItemList
        isMobile={doShowMobileNavigation}
        navItems={navItems}
      />
    </>
  );
};

export function Header(props: HeaderProps) {
  const {
    toggleMobileNavigationMenu,
    doShowMobileNavigationMenu,
    titleText,
    navItems,
  } = props;

  return (
    <HeaderContainer>
      <HeaderTitleBlock title={titleText} />
      <HeaderNavigationBlock
        toggleMobileNavigationMenu={toggleMobileNavigationMenu}
        doShowMobileNavigation={doShowMobileNavigationMenu}
        navItems={navItems}
      />
    </HeaderContainer>
  );
}

function HeaderContainer(props) {
  return (
    <Box w="100%">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        maxW={{ lg: "800px" }}
        m={" 0 auto"}
        py={3}
        px={[3, 3, 3, 0]}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.500", "primary.500"]}
        {...props}
      />
    </Box>
  );
}
