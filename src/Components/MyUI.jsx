// Header.jsx
import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Link,
  IconButton,
  Button,
  Icon,
  Text,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  CalendarIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const MyUI = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const handleLanguageToggle = () => {
    setSelectedLanguage(selectedLanguage == "english" ? "hindi" : "english");
  };
  return (
    <>
      <Flex as="header" alignItems={"center"}>
        <Box w={"300px"}>
          <Heading
            as="h5"
            size="lg"
            letterSpacing="tight"
            fontWeight={500}
            display="flex"
            alignItems={"center"}
          >
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              size="lg"
              mr={3}
            />
            <Text>
              {selectedLanguage == "english" ? "Hello Rutul" : "हेल्लो ऋतुल"}​
            </Text>
          </Heading>
        </Box>

        <Flex ms={5}>
          <Input
            placeholder={
              selectedLanguage == "english" ? "Search Here..." : "सर्च करे..."
            }
            _placeholder={{
              opacity: 1,
              color: colorMode == "dark" ? "gray.500" : null,
            }}
            mr={2}
          />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            colorScheme="gray"
          />
        </Flex>

        <Spacer />
        <Flex>
          <IconButton
            ml="auto"
            aria-label="Toggle dark mode"
            icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
          <Button variant="outline" ml={2} onClick={handleLanguageToggle}>
            {selectedLanguage == "english" ? "हिन्दी" : "English"}
          </Button>
        </Flex>
      </Flex>
      <Flex as="section">
        <Flex
          direction="column"
          bg={colorMode == "dark" ? "gray.700" : "gray.200"}
          w="300px"
          h="100vh"
          p={4}
        >
          <Box mt={5}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              <Icon as={CalendarIcon} boxSize={6} me={6} />
              {selectedLanguage == "english" ? "Menu" : "मेनु"}
            </Text>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Dashboard" : "डेशबोर्ड​"}
            </Link>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Analytics" : "एनालिटिक्स​"}
            </Link>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Products" : "प्रोडक्टस​"}
            </Link>
          </Box>
          <Box mt={5}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              <Icon as={SettingsIcon} boxSize={6} me={6} />
              {selectedLanguage == "english" ? "Settings" : "सेटींग​"}
            </Text>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Users" : "युझर्स​"}
            </Link>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Preferences" : "प्रेफ़रन्स​"}
            </Link>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "Logs" : "लोग्स​"}
            </Link>
            <Link href="#" display="block" fontSize="md" mb={2} ms={50}>
              {selectedLanguage == "english" ? "API" : "एपीआइ"}
            </Link>
          </Box>
        </Flex>

        <Flex justify="center" flex="1" h={"150px"} gap={20} mt={10}>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={colorMode == "dark" ? "gray.700" : "white"}
            shadow="md"
            p={4}
            align={"center"}
          >
            <Flex display="flex" align="center" justify={"center"}>
              <Text fontSize="xl" fontWeight="semibold" mt={10}>
                {selectedLanguage == "english" ? "Users" : "युझर्स​"}:{" "}
                {selectedLanguage == "english" ? "95" : "९५"}
              </Text>
            </Flex>
          </Box>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={colorMode == "dark" ? "gray.700" : "white"}
            shadow="md"
            p={4}
            align={"center"}
          >
            <Flex display="flex" align="center" justify={"center"}>
              <Text fontSize="xl" fontWeight="semibold" mt={10}>
                {selectedLanguage == "english" ? "Emails" : "ईमेईल​"}:
                {selectedLanguage == "english" ? "433" : "४३३"}
              </Text>
            </Flex>
          </Box>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={colorMode == "dark" ? "gray.700" : "white"}
            shadow="md"
            p={4}
            align={"center"}
          >
            <Flex display="flex" align="center" justify={"center"}>
              <Text fontSize="xl" fontWeight="semibold" mt={10}>
                {selectedLanguage == "english" ? "Orders" : "ओर्डर्स​"}:
                {selectedLanguage == "english" ? "145" : "१४५"}
              </Text>
            </Flex>
          </Box>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={colorMode == "dark" ? "gray.700" : "white"}
            shadow="md"
            p={4}
            align={"center"}
          >
            <Flex display="flex" align="center" justify={"center"}>
              <Text fontSize="xl" fontWeight="semibold" mt={10}>
                {selectedLanguage == "english" ? "Products" : "प्रोडक्टस​"}:
                {selectedLanguage == "english" ? "145" : "१२२"}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default MyUI;
