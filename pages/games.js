import React from 'react';
import { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Home from "@mui/icons-material/Home"

import NavigationCard from "@components/NavigationCard";
import useTranslation from  "../hooks/useTranslation";

function Games(props) {


  /*Para obtener el largo de un array de objetos*/
  const getLengthOfObject = (obj) => { 
    let lengthOfObject = Object.keys(obj).length; 
    //console.log(lengthOfObject);
    return lengthOfObject;
  }

  const oneCard = (obj) => { 
    return(
      <Grid container spacing={2}>
      <Grid container item justifyContent="center" xs={12} md={4}>         
        <NavigationCard
          imgSrc={obj.imgSrc}
          imgAlt={obj.imgAlt}
          title={obj.title}
          desc={obj.desc}
          pagePath={obj.pagePath}
          ctaText={obj.ctaText}
        />
      </Grid>
    </Grid>       
    );
  }

  const threeCards = (obj1, obj2, obj3) => { 
    return(
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} md={4}>         
          <NavigationCard
            imgSrc={obj1.imgSrc}
            imgAlt={obj1.imgAlt}
            title={obj1.title}
            desc={obj1.desc}
            pagePath={obj1.pagePath}
            ctaText={obj1.ctaText}
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} md={4}>         
          <NavigationCard
            imgSrc={obj2.imgSrc}
            imgAlt={obj2.imgAlt}
            title={obj2.title}
            desc={obj2.desc}
            pagePath={obj2.pagePath}
            ctaText={obj2.ctaText}
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} md={4}>         
          <NavigationCard
            imgSrc={obj3.imgSrc}
            imgAlt={obj3.imgAlt}
            title={obj3.title}
            desc={obj3.desc}
            pagePath={obj3.pagePath}
            ctaText={obj3.ctaText}
          />
        </Grid>                
      </Grid>       
    );
  } 
  
  const windowSize = useWindowSize();
 
  const { label } = useTranslation();
  const items = label("games", "navigationCard");
  const cards = [];
  let index = 0;
  let long = getLengthOfObject(items);
  let onlyOneCard = false;
  
  while(index < long){
    if(windowSize.width >= 1000){
      if((long - index)>=3){
        let item1 = items[index];
        let item2 = items[index + 1];
        let item3 = items[index + 2];
        cards.push(threeCards(item1, item2, item3));
        index+=3;
      } else {
        let item = items[index];
        cards.push(oneCard(item));
        index++;           
      }
    } else {
      let item = items[index];
      cards.push(oneCard(item));
      index++;        
    }   
  }

  return (
    <Carousel     
      autoPlay = {true}
      interval = {3000}
      duration = {20}
      navButtonsAlwaysVisible = {true}

    >
      {cards}
    </Carousel>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Games;

