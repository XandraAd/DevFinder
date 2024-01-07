/* eslint-disable no-unused-vars */
import React from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { GetThemeValues } from "./ContextProvider";
//import { color } from "framer-motion";

const NavBar = () => {
  const { isDarkMode, toggleColorTheme } = GetThemeValues();
  return (
    <>
      <Box
        
        fontWeight={"bold"}
        width={{ base: "327px",md:"573px", lg: "730px",xl:"800px",'2xl':"800px"}}
        h={"55px"}
        marginTop={"2rem"}
       
       marginInline={{ base: "3rem", md: "7rem", lg: "10rem", xl: "15rem",'2xl':"35rem" }}
      
     
      >
        <Flex justifyContent={"space-between"} paddingBlock={"10px"}>
          <Text
           
            fontSize="2xl"
            color= {isDarkMode ? "#FFF":"#222731"}
      
           
          >
            devfinder
          </Text>
          <Box
          color={isDarkMode ? "#FFF" : "#697C9A"}
          
         //width={"110px"}
            
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Text fontSize={"md"} marginRight={"8px"} textTransform={"uppercase"} marginTop={{base:".5rem"}}>
                {isDarkMode ? "light":"dark"}
              </Text>
              {isDarkMode ? (
                <Icon as={BsSun} w={"40px"} color={"#FFF"} 
                onClick={toggleColorTheme}/>
              ):
              <Icon as={BsMoonFill} w={"40px"} 
              onClick={toggleColorTheme}/>}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
