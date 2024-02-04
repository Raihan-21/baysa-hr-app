import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

// Icons
import { IoMdNotifications } from "react-icons/io";
import { PiSquaresFourLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="p-4">
      <Flex
        columnGap={5}
        justifyContent={"space-between"}
        alignItems={"center"}
        role="navbar"
      >
        <Text fontWeight={"bold"} fontSize={"x-large"}>
          Boxboard
        </Text>
        <Flex columnGap={10} alignItems={"center"}>
          <Link
            href={"/"}
            data-testid="menu-item"
            className={router.pathname === "/" ? "menu--active" : ""}
          >
            <Flex alignItems={"center"} columnGap={1}>
              <PiSquaresFourLight color="#BBC3CC" />
              <Text color="thirdgray">Overview</Text>
            </Flex>
          </Link>
          <Link
            href={"/jobs"}
            data-testid="menu-item"
            className={router.pathname === "/jobs" ? "menu--active" : ""}
          >
            <Flex alignItems={"center"} columnGap={1}>
              <FiSearch color="#BBC3CC" />
              <Text color="thirdgray">Job Search</Text>
            </Flex>
          </Link>
          <Link href={"/schedule"} data-testid="menu-item">
            <Flex alignItems={"center"} columnGap={1}>
              <FaClockRotateLeft color="#BBC3CC" />
              <Text color="thirdgray">Schedule</Text>
            </Flex>
          </Link>
          <Link href={"/histor"} data-testid="menu-item">
            <Flex alignItems={"center"} columnGap={1}>
              <FaClock color="#BBC3CC" />
              <Text color="thirdgray">History</Text>
            </Flex>
          </Link>
          <Link href={"/events"} data-testid="menu-item">
            <Flex alignItems={"center"} columnGap={1}>
              <MdOutlineEventNote color="#BBC3CC" />
              <Text color="thirdgray">Events</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems="center" columnGap={5}>
          <IoMdNotifications />
          <Img
            data-testid="profile-img"
            src="/profile.jpg"
            width={10}
            height={10}
            borderRadius={"50%"}
          />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
