import React, { useReducer,useContext, useEffect } from "react";
const AppContext = React.createContext();
import reducer from "./reducer";


const AppProvider = ({children}) => {
    const API = "https://chandragodbhanu.github.io/services_api/data.json"
    const initialState = {
        name : " ",
        image : " ",
        content : " ",
        services: []
    }
    const updateHomePage = () => {
        return dispatch({
          type: "HOME_UPDATE",
          payload: {
            name: "Practice Website",
            image: "./images/hero.svg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi possimus aliquam impedit quae modi labore sapiente! Numquam, asperiores illo ullam officiis recusandae eius, non impedit minima distinctio fugit doloribus!"

          },
        });
      };
    
      const updateAboutPage = () => {
        return dispatch({
          type: "ABOUT_UPDATE",
          payload: {
            name: "Chandra Bhanu Singh",
            image: "./images/about1.svg",
            content: "I am determined to be cheerful and happy in whatever situation I may find myself. For I have learned that the greater part of our misery or unhappiness is determined not by our circumstance but by our disposition.",
        }
          });
        };
        const getServices = async (url) => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data });
          } catch (error) {
            console.log(error);
          }
        };
    
        useEffect(()=>{
          getServices(API)
        },[])
    
    const [state,dispatch] = useReducer(reducer,initialState)
    return <AppContext.Provider value={{...state,updateHomePage ,updateAboutPage}}>{children}</AppContext.Provider>
    };

    const useGlobalContext = () => {
        return useContext(AppContext);
      };
export {useGlobalContext , AppProvider,}