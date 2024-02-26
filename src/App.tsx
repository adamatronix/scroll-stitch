import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import './App.css'

const Scene = styled.div`
   perspective: 800px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100svh;
`
const AllScrolls = styled.div`
  position: relative;
  transform-origin: center;
  transform-style: preserve-3d;
  transition: transform .2s ease; 
  transform: scale(0.5);
`

const ScrollArea = styled.div`
  position: relative;
  width: 1200px;
  height: 1000px;
  color: white;
  text-align: left;
  overflow: hidden;
  transform-origin: center bottom;
  transform: rotateX(-15deg) translateZ(0px);
`

const ScrollArea2 = styled(ScrollArea)`
  transform-origin: center top;
  transform: rotateX(15deg) translateZ(0px);
`

const ScrollInner = styled.div`
  position: absolute;
  width: 100%;
  height: 2000px;
  overflow-y: scroll;
  font-size: 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ScrollInner2 = styled(ScrollInner)`
  top: -1000px;
`

function App() {
  const allRef = useRef<any>(null!);
  const firstRef = useRef<any>(null!);
  const secondRef = useRef<any>(null!);

  const onScroll = useCallback((e:React.UIEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement);
    console.log(target.scrollTop);

    if(firstRef.current) {
      firstRef.current.scrollTop = target.scrollTop;
    }
    if(secondRef.current) {
      secondRef.current.scrollTop = target.scrollTop;
    }
  },[])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const x = e.clientX - (window.innerWidth/2);
    const y = e.clientY - (window.innerHeight/2);

    console.log(x);
    if(allRef.current) {
      allRef.current.style.transform = `rotateY(${x/10}deg) rotateX(${y/10}deg) scale(0.5)`;
    }
  },[])

  return (
    <Scene onMouseMove={onMouseMove}>
      <AllScrolls ref={allRef}>
        <ScrollArea>
          <ScrollInner onScroll={onScroll} ref={firstRef}>
          <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
  <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
  <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
          </ScrollInner>
        </ScrollArea>
        <ScrollArea2>
          <ScrollInner2 onScroll={onScroll} ref={secondRef}>
          <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
  <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
  <p>Humanity… All of my suffering on this world has	been at the hands of humanity, particularly women.	
  It has made me realize just how brutal and twisted humanity is as a species. All I ever wanted	was	to fit
  in and live a happy life amongst humanity, but I was cast out and rejected, forced to	endure an existence
  of loneliness and insignificance, all because the females	of the	human species were incapable of	seeing
  the	value in me.</p>
  <p>This	is the story of how I, Elliot Rodger, came to be. This	is the story of my entire life. It is a dark story
  of sadness, anger, and hatred. It is a story of a war against cruel	injustice. In this magnificent story, I	will
  disclose every single	detail about my life, every single significant experience	that I have pulled from my
  superior memory, as well as how those experiences have shaped my views of	the world. This tragedy did
  not have to happen.	I didn’t want things to turn out this	way, but humanity forced	my hand, and this	
  story will explain why. My life	didn’t start out dark and twisted. I started out as a happy and blissful
  child, living my life to the fullest in a world I	thought was good and pure…</p>
          </ScrollInner2>
        </ScrollArea2>
      </AllScrolls>
    </Scene>
  )
}

export default App
