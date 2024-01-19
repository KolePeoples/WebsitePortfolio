import React from "react";

function Intro()
{
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20
        pb-6">
            <img src="/assets/Headshot.png" style={{width: 200, height: 200, borderRadius: 200/ 2}}></img>
            <h1 className="text-4xl md: text-7xl dark:text-white mb-1 md: mb-3 font-bold">Kole Peoples</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software & Mobile App Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I built this website to highlight some of my personal projects as a developer. 
                Everything on the site can also be found on my <a href="https://github.com/KolePeoples" target="_blank"
                 className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600" rel="noopener noreferrer">GitHub page</a>. 
                 Every project on the page is completed, but there is always room for improvement! Check back later to see if I have made any tweaks 
                 or improvements to some of my projects! 
                </p>
        </div>
    )
}
export default Intro;