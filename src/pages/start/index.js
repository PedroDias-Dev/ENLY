import React from "react";

// css
import './styles.css'

// components
import Header from '../../components/header/index.js';

// images
import MainSprites from '../../img/main-sprites-example.png'

const Main = () => {
    return (
        <div class="h-screen pb-14 bg-right bg-cover" style={{backgroundColor: "black"}}> 
            
            <div class="w-full container mx-auto p-6">
                <Header />
            </div>
        
            
            <div class="container pt-24 md:pt-28 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                
                
                <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">ENLY</h1>
                    <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-white">Sub-hero message, not too long and not too short. Make it just right!</p>
                
                    <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Start playing now:</p>
                    <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                        <a href="/game/character"><button class="transition ease-in-out delay-150 bg-purple-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 h-12 font-bold bounce-top-icons py-1 px-9 text-slate-100 rounded">START</button></a>
                        <a href="/guide"><button class="transition ease-in-out delay-150 bg-purple-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 h-12 font-bold bounce-top-icons py-1 px-9 mx-10 text-slate-100 rounded">HOW TO PLAY</button></a>
                    </div>
        
                </div>
                
                
                <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
                    <img class="w-2/4 mx-auto slide-in-bottom" style={{filter: 'blur(1px)'}} src={MainSprites} alt="Bunch of character sprites"/>
                </div>
                
                
                <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                    <a class="text-gray-500 no-underline hover:no-underline" href="https://github.com/PedroDias-Dev">&copy; PEDRO DIAS KNJA 2022</a>
                </div>
                
            </div>
            
        
        </div>
        
    )
};

export default Main;