import React, { useState } from "react";
import { Box, Flex, Icon, Image, chakra } from "@chakra-ui/react";

import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Team = () => {
    const [eu, setEu] = useState("/eu.png");
  return (
    <>
    <Box mt={20} px={10} textAlign={{ lg: "center" }}>
        <chakra.p
            mt={10}
            pb={10}
            fontSize={{ base: "17", lg: "22" }}
            lineHeight="4"
            fontWeight="bold"
            letterSpacing="0.2em"
            _light={{ color: "gray.500" }}
        >
            TIME
        </chakra.p>
    </Box>
    <Flex
      p={50}
      w="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        onMouseEnter={() => setEu("/eucor.png")}
        onMouseLeave={() => setEu("/eu.png")}
      >
        <Image
          w="full"
          h={80}
          fit="cover"
          objectPosition="center"
          src={eu}
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Em foco (10h-18h, seg-sex)
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Lucas
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            🎸📷📖☕🧗‍♂️🎲 e desenvolvedor Full Stack.
          </chakra.p>

          {/* <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Choc UI
            </chakra.h1>
          </Flex> */}

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Goiás, Brasil
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              lucas-camargo@outlook.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
    </>
  );
};

export default Team;