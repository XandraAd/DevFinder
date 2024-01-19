/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import NavBar from "../components/NavBar";
import SearchInput from "../components/SearchInput";
import ContentCard from "../components/ContentCard";
import { Center, Box, Container } from "@chakra-ui/react";
import { GetThemeValues } from "../components/ContextProvider";
import axios from 'axios'

const Home = () => {
  const { isDarkMode } = GetThemeValues();
  //console.log("isDarkMode:", isDarkMode);
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);

  const getGithubUser = async(user)=>{
try{
  setLoading(true);
  const response= await axios.get(`https://api.github.com/users/${user}`,{
    headers:{
Authorization:`Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`

    }
  })
  
  const data=await response.data
  console.log(data)
  setLoading(false)
  setUser(data)
  setError(null)
}catch (err){
  console.log(err)
  setError('No results')

}

     
    }
  

  return (
    <>
      
      <Box 
      w='100%'

h={"100vh"}
bgColor= {isDarkMode ? "#141D2F":"#F6F8FF"}
 >
  
  <NavBar />
  <SearchInput  getGithubUser={getGithubUser} error={error}/>
  <Center>
  <ContentCard  user={user}/>
  </Center>
 
</Box>
     
       
      
    </>
  );
};

export default Home;
