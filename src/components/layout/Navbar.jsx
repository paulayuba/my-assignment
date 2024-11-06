import { buttonBackground } from "../../../public/icons"
import CustomBackgroundButton from "../common/CustomBackgroundButton"
import { RiMenu2Line } from "react-icons/ri";
export default function Navbar(){
     
    const navItems = [
        {
            title: "Home",
            link: "",
        },
        {
            title: "About Us",
            link: "",
        },
        {
            title: "Services",
            link: "",
        },

        {
            title: "Blog",
            link: "",
        },
        {
            title: "Contact",
            link: "",
        },
        {
            title: "Sign In",
            link: "",
        },
        {
            title: "Try for Free",
            link: "",
        },

    ]
    return(
        <div className=" w-full h-[158px] px-20 fixed z-[10] flex items-center justify-between bg-transparent">
            <div className="w-fit flex flex-row items-center h-fit gap-2">
                <p className="text-white text-4xl px-1 border-red-100 bg-purple-400 border rounded-full"><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="40" height="40" rx="20" fill="url(#paint0_linear_1_20)"/>
                    <rect x="9.30011" y="6.40039" width="22.4" height="6" fill="white"/>
                    <rect x="4.10004" y="17.2012" width="22.4" height="6" fill="white"/>
                    <rect x="9.30011" y="28" width="22.4" height="6" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_20" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0.09375" stop-color="#455EB5"/>
                    <stop offset="0.484375" stop-color="#5643CC"/>
                    <stop offset="0.692708" stop-color="#673FD7"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </p>
                <h3 className="text-[30px] text-white leading-[42px] font-semibold">Innovative Solutions Group</h3>
            </div>
             
            <div className="w-fit h-fit flex gap-6  items-center">
                {navItems.map((value,l) => (
                    
                  value.title !== "Try for free" ?  
                  <div key={l} className={`${value.title === "Shop Now" ? "text-[#BBA27B]" : "text-white"} px-1 text-[16px] font-semibold `}>
                     {value.title}
                    </div>    
                    :  <CustomBackgroundButton  text={value.title}/>
                ))}
            </div>
        </div>
    )
}