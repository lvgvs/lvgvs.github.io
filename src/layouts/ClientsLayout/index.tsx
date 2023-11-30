import React, { useState } from "react";
import { chakra, Box, SimpleGrid, Flex, Link, Image } from "@chakra-ui/react";

const Clients = () => {
  const [ogefx, setOgefx] = useState("/ogefxbw.png");
  const [fabricio, setFabricio] = useState("/fabriciobw.png");
  const [pensanoevento, setPensanoevento] = useState("/pensanoeventobw.png");
  const [electrokraft, setElectrokraft] = useState("/electrokraftbw.png");
  return (
    <Flex
      w="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        // mx="auto"
        px={8}
        pb={10}
        // bg="white"
        // _dark={{ bg: "gray.800" }}
        maxW="5xl"
      >
      <Box textAlign={{ lg: "center" }}>
        <chakra.p
          mt={10}
          pb={10}
          fontSize={{ base: "17", lg: "22" }}
          lineHeight="4"
          fontWeight="bold"
          letterSpacing="0.2em"
          _light={{ color: "gray.500" }}
        >
          CLIENTES
        </chakra.p>
      </Box>
        <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
            spacingX={{ base: 8, lg: 16 }}
            spacingY={16}
            mt={6}
        >
            <Link
            m="auto"
            isExternal
            aria-label="Cliente OGEFX Consultoria e Treinamento"
            href="https://ogefx.com.br"
            >
                <Image
                m="auto"
                src={ogefx}
                onMouseEnter={() => setOgefx("/ogefx.png")}
                onMouseLeave={() => setOgefx("/ogefxbw.png")}
                />
            </Link>
            <Link
            m="auto"
            isExternal
            aria-label="Cliente Fabrício Mota"
            href="https://fabriciomota.net"
            >
                <Image
                m="auto"
                src={fabricio}
                onMouseEnter={() => setFabricio("/fabricio.png")}
                onMouseLeave={() => setFabricio("/fabriciobw.png")}
                />
            </Link>
            <Link
            m="auto"
            isExternal
            aria-label="Cliente pensanoevento.com.br"
            href="https://www.pensanoevento.com.br/"
            >
                <Image
                m="auto"
                src={pensanoevento}
                onMouseEnter={() => setPensanoevento("/pensanoevento.png")}
                onMouseLeave={() => setPensanoevento("/pensanoeventobw.png")}
                />
            </Link>
            <Link
            m="auto"
            isExternal
            aria-label="Cliente ElectroKraft"
            href="https://wa.me/556291163135"
            >
                <Image
                m="auto"
                src={electrokraft}
                onMouseEnter={() => setElectrokraft("/electrokraft.png")}
                onMouseLeave={() => setElectrokraft("/electrokraftbw.png")}
                />
            </Link>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Clients;