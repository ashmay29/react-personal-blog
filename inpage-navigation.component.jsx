import { useState, useRef, useEffect } from "react";

const InPageNavigation = ({ routes,defaulthidden = [], defaultIndex = 0, children }) => {

    let activetablinneref = useRef()
    let activeTab = useRef()

    let [ inpagenavindex , setinpagenavindex ] = useState(defaultIndex)

    const changepagestate = (btn, index)=>{

        let { offsetWidth,offsetLeft} = btn;
        activetablinneref.current.style.width = offsetWidth +"px"
        activetablinneref.current.style.left = offsetLeft +"px"
        setinpagenavindex(index)
    }

    useEffect(()=>{
        changepagestate(activeTab.current, defaultIndex )
    }, [])

    return (
        <>
            <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
                {
                    routes.map((route, index) =>{
                        return (
                            <button 
                            ref = {index== defaultIndex ? activeTab : null}
                            key={index} 
                            className={"p-4 px-5 capitalize " + (inpagenavindex==index ? "text-black" : "text-dark-grey ") + (defaulthidden.includes(route) ? "md:hidden": " ")}
                            onClick={(e)=> {changepagestate(e.target , index)}}
                            >
                                {route}
                            </button>
                        );
                    })
                }
                <hr ref={activetablinneref} className="absolute bottom-0 duration-300"></hr>
            </div> 
            { Array.isArray(children) ? children[inpagenavindex]: children }
        </>
    )
}

export default InPageNavigation