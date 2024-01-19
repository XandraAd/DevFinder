/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState ,useEffect} from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { GetThemeValues } from "./ContextProvider";

const SearchInput = ({ getGithubUser, error }) => {
  const { isDarkMode } = GetThemeValues();
  const [query, setQuery] = useState("");


  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    setQuery("")
    getGithubUser(query);
    
    
  };

 

  //const displayResult = user && user.login ? user.login : "User";

  return (
    <>
      <Box
        bgColor={isDarkMode ? "#1E2A47" : "#fff"}
        fontWeight={"bold"}
        width={{ base: "330px", md: "550px", lg: "710px", xl: "800px",'2xl':"800px" }}
        h={"50px"}
        marginTop={"2rem"}
       marginLeft={{ base: "3rem", md: "7rem", lg: "10rem", xl: "20rem",'2xl':"35rem"}}
         //marginInline={"400px"}
        borderRadius={"1rem"}
        //margin={"0 auto"}
      >
        <InputGroup paddingBlock={"2px"} borderColor={"transparent"}>
          <InputLeftElement pointerEvents="none" paddingBlock={"5px"}>
            <GoSearch color="#0079FF" w={24} h={24} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search GitHub username..."
            value={query}
            onChange={handleSearch}
            color={isDarkMode ? "#FEFEFE": "#697C9A"}
          />
          <InputRightElement paddingBlock={"5px"} width={{ base: "60px", md: "160px", lg: "160px", xl: "160px" }}>
          {error ? (
          <Text color="red.500">{error}</Text>
          ):(
            <Text color="whiteAlpha.900">{error}</Text> ) }
          <Button
            marginTop={2}
            width={{ base: "60px", md: "80px", lg: "80px", xl: "80px" }}
            h={{ base: "30px", md: "40px", lg: "40px", xl: "40px" }}
            textTransform={"capitalize"}
            bgColor={"#0079FF"}
            _hover={"#4B6A9B"}
            color={"#FEFEFE"}
            onClick={handleSubmit}
          >
            search
          </Button>
         
            

          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

export default SearchInput;
