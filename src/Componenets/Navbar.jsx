import bgimg from '../assets/bannerbg.jpg'

function Navbar () {
    return(
        <>
    
         <div className=" relative px-30 pt-5 bg-black text-white" >
            <div className=' absolute inset-0  bg-cover h-screen w-full opacity-20'style={{backgroundImage: `url(${bgimg})`}}>
                </div>
            <div className='relative z-10'>
            <div className="flex justify-between items-start ">
                <div className="text-5xl font-bold text-red-700 mt-2">
                NETFLIX
                </div>
                <div className='flex ml-200'>
                <select className="pr-25 border p-1 mr-2 border-gray-500" name = "" id ="">
                    <option className= "text-black" value = "English">English</option>
                    <option className= "text-black" value = "Arabic"> Arabic</option>
                    <option className= "text-black" value = "Hindi">Hindi</option>
                </select>
                </div>
            
                <button className="bg-red-600 px-5 py-1 rounded" > Sign In </button>
            </div>
            </div> 
             <div className="py-30 flex flex-col items-center mt-10"> 
                <div className="text-6xl font-bold w-150 text-center"> 
                     Ultimated flims, series and more
                </div>
                <div className="py-5 font-bold text-[18px]">
                    New arrivals weekly.Cancel anytime. 
                </div>
                <p>
                    Ready to watch? Enter your email to create or restart your membership
                </p>
                  <div className="py-5"> 
                    <input className="border p-1 border-gray-500 pr-30 mr-5 " type = "text" placeholder = "Email Address" />
                    <button className="bg-red-600 p-2 px-5 rounded">Get Started</button>
                </div>
            </div>
            </div>
    
    
        </>
    )
}
export default Navbar