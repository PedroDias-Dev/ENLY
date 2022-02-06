import React from "react";
import Header from "../../components/header";

const Guide = () => {
    return (
        <div>
            <div class="h-screen pb-14 bg-right bg-cover" style={{backgroundColor: "black"}}> 
            
            <div class="w-full container mx-auto p-6">
                <Header />
            </div>
            
            <div class="container pt-15 md:pt-15 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                
                <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Guide for <br/> ENLY</h1>
                    <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-white">Sub-hero message, not too long and not too short. Make it just right!</p>
                
                    <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Start playing now:</p>
        
                </div>
                
            </div>

            <div class="md:pt-1 px-10 mx-16 flex flex-wrap flex-col md:flex-row items-center bg-white rounded">
                
                <div class="pt-15 my-8 flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <p class="my-4 md:text-2xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Controls</p>
                    <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-black">Sub-hero message, not too long and not too short. Make it just right!</p>
                
                    <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Start playing now:</p>
        
                </div>
                
            </div>
            
        
        </div>

        </div>
    )
}

export default Guide;