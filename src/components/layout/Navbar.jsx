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
            <div className="w-fit flex flex-row items-center h-fit">
                <p className="text-white text-4xl px-1 border-red-100"><RiMenu2Line /></p>
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