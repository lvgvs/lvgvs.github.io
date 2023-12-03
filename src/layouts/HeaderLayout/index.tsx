import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Logo } from "@choc-ui/logo";

const Header = () => {
  const mobileNav = useDisclosure();
  const { colorMode } = useColorMode();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { scrollY } = useScroll();
  React.useEffect(() => {
    return (setY(scrollY.get()));
  }, [scrollY]);

  const SponsorButton = (
    <Box
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      as="button"
      aria-label="Clique aqui para fazer uma doação"
      onClick={onOpen}
      rel="noopener noreferrer"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: "gray.100",
        borderColor: "gray.300",
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
    >
      <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Doar
      </Box>
    </Box>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button
        w="full"
        variant="solid"
        transition="color 0.2s"
        leftIcon={
          <AiFillGithub 
            display="block"
            w="5"
            h="5"
            _hover={{ color: "gray.600" }}
          />
        }
        aria-label="Ir para minha página no GitHub"
        onClick={() => window.open("https://github.com/lvgvs", "_blank")}
      >
        GitHub
      </Button>
      <Button
        w="full"
        as="a"
        variant="solid"
        transition="color 0.2s"
        leftIcon={
          <Icon
            as={FaHeart} 
            display="block"
            w="5"
            h="5"
            color="red.500"
            _hover={{ color: "gray.600" }}
          />
        }
        aria-label="Ir para minha página no GitHub"
        onClick={onOpen}
        target="_blank"
      >
        Doar
      </Button>
    </VStack>
  );

  const pixContent = (
    <>
      <Menu>
        <MenuButton as={Button}>
          Pix
        </MenuButton>
        <MenuList w="70%" p={4} display="flex" flexDir="column" alignItems="center">
          <Image
            w="80%"
            src="pix.png"
          />
          <Box
            display="flex"
            flexDir="column"
            flexWrap="nowrap"
            w="100%"
            pt={4}
            mt={5}
            >
            <Box
              id="copy-alias"
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              w="auto"
              pb={3}
              >
                <Box
                justifySelf="flex-start"
                >
                  Chave Pix
                </Box>
                <Box>
                      <Box
                      justifySelf="end"
                      style={{overflow: "hidden", textOverflow: "ellipsis",}}
                      >
                        Chave Aleatória
                      </Box>
                </Box>
            </Box>
            <Box
            display="flex"
            flexDir="row"
            justifySelf="flex-end"
            alignSelf="flex-end"
            style={{overflow: "hidden", textOverflow: "ellipsis",}}
            pb={3}
            >
              c1df727c-fd84-4358-9d98-2363c802b764
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              w="auto"
              pb={3}
            >
                <Box justifySelf="flex-start" fontWeight="bold">Nome</Box>
                <Box justifySelf="flex-end">Lucas Camargo Batista</Box>
            </Box>
            <Box display="flex" flexDir="row" justifyContent="space-between" w="auto" pb={3}>
                <Box justifySelf="flex-start" fontWeight="bold">CPF</Box>
                <Box justifySelf="flex-end">•••.018.881-••</Box>
            </Box>
            <Box display="flex" flexDir="row" justifyContent="space-between" w="auto" pb={3}>
                <Box justifySelf="flex-start" fontWeight="bold">Banco</Box>
                <Box justifySelf="flex-end">260 - Nu Pagamentos S.A.</Box>
            </Box>
            <Box display="flex" flexDir="row" justifyContent="space-between" w="auto" pb={3}>
                <Box justifySelf="flex-start" fontWeight="bold">Identificador</Box>
                <Box justifySelf="flex-end">ikN27kbqj1</Box>
            </Box>
          </Box>
        </MenuList>
      </Menu>
      <br />
    </>
  );

  const criptoContent = (
    <>
      <Menu preventOverflow={false}>
        <MenuButton as={Button}>
          Criptomoedas
        </MenuButton>
        <MenuList display="flex" flexDir="column" alignItems="center" bg="transparent" border="0px">
          <iframe src={`https://nowpayments.io/embeds/donation-widget?api_key=${process.env.NEXT_PUBLIC_NOW_API || ""}&source=lk_donation&medium=referral`} style={{overflowY: "hidden"}} width="354" height="625"></iframe>
        </MenuList>
      </Menu>
      <br />
    </>
  );
  return (
    <>
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow="sm"
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Image
                    w="12vh"
                    src="lt.png"
                  />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                as="a"
                href="https://github.com/lvgvs"
                target="_blank"
                size="md"
                fontSize="lg"
                aria-label="Ir para minha página no GitHub"
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                // onClick={toggleMode}
                icon={<AiFillGithub />}
              />
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                size="md"
                display={{ base: "flex", md: "none" }}
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="red.500"
                ml={{ base: "0", md: "3" }}
                onClick={onOpen}
                icon={<FaHeart />}
              >
                Doar
              </IconButton>
              {SponsorButton}
              {/* <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              /> */}
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Doar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
          display="Flex"
          flexDir="column"
          >
            {criptoContent}
            {pixContent}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='brand' mr={3} onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default Header;
