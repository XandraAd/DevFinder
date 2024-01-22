/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  CardFooter,
  Button,
  Center,
  
} from "@chakra-ui/react";
import { PiMapPinFill, PiLinkBold, PiTwitterLogoFill } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GetThemeValues } from "./ContextProvider";
import moment from "moment";

const ContentCard = ({ user }) => {
  const { isDarkMode } = GetThemeValues();
  return (
    <>
      <Card
      
        w={{base:"500px" ,md: "573px", lg: "740px", xl: "800px",'2xl':"800px"}}
        h={{ base:"500px", md: "600px", lg: "520px", xl: "480px" ,'2xl':"600px"}}
        
        marginBlock={{ base: "4rem", md: "4rem", lg: "2rem", xl: "2rem",'2xl':"6rem"}}
        marginInline={{ base: "3rem", md: "7rem", lg: "10rem", xl: "15rem",'2xl':"35rem" }}
        borderRadius={"1rem"}
        bgColor={isDarkMode ? "#1E2A47" : "#fff"}
      >
        <CardBody>
          <Grid
            templateAreas={`"nav header"
                  " nav main "
                  "nav footer"`}
            gridTemplateRows={{
              base: "200px",
              md: "150px  1fr 150px",
              lg: "50px 1fr 50px",
              xl: "80px",
            }}
            gridTemplateColumns={"150px 1fr"}
            h={{base:"100px",md:"150px",lg:"200px",xl:"200px"}}
            //gap='1'
            color={isDarkMode ? "#FFF" : "#697C9A"}
            pos={"relative"} 
          >
            <GridItem area={"nav"}>
              <Image
                src={user ? user.avatar_url : "./Bitmap.png"}
                alt="bitmap"
                boxSize={{base:"100px",md:"117px",lg:"117px",xl:"117px"}}
                objectFit="cover"
                rounded={"6rem"}
              />
            </GridItem>
            <GridItem area={"header"} marginTop={"1rem"}>
              <Flex justifyContent= {{base:"space-evenly",md:"space-between",lg:"space-between",xl:"space-between"}}>
                <Heading
                  color={isDarkMode ? "#FFF" : "#697C9A"}
                  fontSize={"xl"}
                  textTransform={"capitalize"}
                  width={{base:"10rem"}}
                  marginLeft={{base:"-25px"}}
                >
                  {user ? user.login : "The Octocat"}
                </Heading>
                <Text
                  fontSize={"md"}
                  //border={"2px"}
                  pos={"relative"}
                  top={{base:"60px",md:"60px",lg:"0px",xl:"0px"}}
                  right={{base:"160px",md:"16rem",lg:"3rem",xl:"3rem"} }
                  
                  width={{base:"9rem"}}
                >

                  Joined {user ? moment(user.created_at).format(" Do MMM YYYY"):"25 Jan 2011"}
                </Text>
              </Flex>
            </GridItem>

            <GridItem area={"main"}>
              <HStack pos={"absolute"} top={{base:"50px",md:"45px",lg:"45px",xl:"50px"}} left={{base:"130px"}}
              >
                <Text color={"#0079FF"}>@{user ? user.login : "octocat"}</Text>
              </HStack>
              <HStack 
               pos={"absolute"} 
              top={{base:"130px",md:"150px",lg:"150px",xl:"100px"}} 
              marginLeft={{base:"10px",md:"10px",lg:"10rem",xl:"11.5rem"}}
              left={{base:"-10px",md:"20px",lg:"-10px",xl:"-30px"}}
              >
                <Text >
                  {" "}
                  {user
                    ? user.bio
                    : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
                </Text>
              </HStack>
            </GridItem>
            <GridItem>
              <Box
                w={{base:"240px",md:"500px",lg:"500px",xl:"550px"} }
                bgColor={isDarkMode ? "#141D2F" : "#F6F8FF"}
                padding={"1rem"}
                pos={"absolute"} 
                top={{base:"240px",md:"240px",lg:"220px",xl:"180px"} }
                 h={{base:"4rem",md:"5rem",lg:"5rem",xl:"5rem"} }
                 left={{base:"0px",md:"20px",lg:"140px",xl:"150px"} }
                 borderRadius={"1rem"}
              >
                <Flex justifyContent={"space-between"} >
                  <Box>
                    <Text fontSize={"sm"}>Repos</Text>
                    <Heading
                      fontSize={"md"}
                      fontWeight={"bold"}
                      color={isDarkMode ? "#FFF" : "#141D2F"}
                    >
                      {user ? user.public_repos : "8"}
                    </Heading>
                  </Box>
                  <Box>
                    <Text fontSize={"sm"} fontWeight={400}>
                      Followers
                    </Text>
                    <Heading
                      fontSize={"md"}
                      fontWeight={700}
                      color={isDarkMode ? "#FFF" : "#141D2F"}
                    >
                      {user ? user.followers : "3938"}
                    </Heading>
                  </Box>
                  <Box>
                    <Text fontSize={"sm"}>Followering</Text>
                    <Center>
                    <Heading
                      fontSize={"md"}
                      fontWeight={"bold"}
                      color={isDarkMode ? "#FFF" : "#141D2F"}
                    >
                      {user ? user.following : "9"}
                    </Heading>
                    </Center>
                    
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </CardBody>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW:{base:"200px",md:"200px",lg:"220px",xl:"240px"} 
            },
          }}
          h={"15vh"}
          //marginLeft={"4rem"}
          pos={"absolute"} 
          top={{base:"320px",md:"350px",lg:"320px",xl:"280px"} }
          
           left={{base:"",md:"-60px",lg:"20px",xl:"70px"} }
        >
          <Button
            variant="ghost"
            leftIcon={<PiMapPinFill  />}
            width={"20px"}
            
            marginLeft={{base:"-25px",md:"2.5rem",lg:"4.5rem",xl:"20px"} }
            fontSize={"md"}
            color={isDarkMode ? "#FFF" : "#697C9A"}
          >
            {user ? user.location : "San Francisco"}
          </Button>

          <Button
          flex=
        
           {{base:"",md:"1.2",lg:"1.2",xl:"1.2"}}
            variant="ghost"
            leftIcon={<PiTwitterLogoFill />}
            gap={"2"}
            fontSize={"md"}
            color={isDarkMode ? "#FFF" : "#697C9A"}
            
          >
            {user ? user.twitter_username : " Not Available"}
          </Button>
          <Button
          
            flex= {{base:"0.7",md:"1.2",lg:"1.2",xl:"3"}}
            variant="ghost"
            leftIcon={<PiLinkBold />}
            fontSize={"md"}
            color={isDarkMode ? "#FFF" : "#697C9A"}
            marginLeft={{base:"-25px",md:"0rem",lg:"1rem",xl:"-45px"} }
          >
            {user ? user.twitter_username : " https://github.blog"}
          </Button>
          <Button
            flex= {{base:"0.7",md:"1.2",lg:"1.2",xl:"3"}}
            variant="ghost"
            leftIcon={<HiBuildingOffice2 />}
            paddingLeft={"25px"}
            fontSize={"md"}
            color={isDarkMode ? "#FFF" : "#697C9A"}
            gap={"2"}
            marginLeft={{base:"-80px"}}
          >
            @github
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContentCard;
