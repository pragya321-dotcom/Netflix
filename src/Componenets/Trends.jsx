import Trends1 from '../assets/Trends1.webp';
import Trend2 from '../assets/Trend2.webp';
import trends3 from '../assets/trends3.webp';
import Trends4 from '../assets/Trends4.webp';
import Trends5 from '../assets/Trends5.webp';


function Trends() {
  const movies = [
   
     {
      "id": 1,
      "url" : Trends1
    },
     {
      "id": 2,
      "url" : Trend2
    },
     {
      "id": 3,
      "url" : trends3
    },
     {
      "id": 4,
      "url" : Trends4
    },
     {
      "id": 5,
      "url" : Trends5
    },
     {
      "id": 6,
      "url" : Trends1
    },
     {
      "id": 7,
      "url" : trends3
    },
     {
      "id": 8,
      "url" : Trends5
    },
     {
      "id": 9,
      "url" : trends3
    },
      

  ]
  return (
    <div className="py-10">
      <div className="font-bold text-2xl">
        Trending Now
      </div>
       
       <div className='flex gap-8  overflow-scroll hide-scrollbar'>
       {movies.map((movies,index) =>{
        return(
           <div key = {index} className="pt-6 relative">
        <img className = "rounded-2xl min-w-[200px] " src={movies.url} alt = "" /> 
          <div className = "text-9xl font-bold absolute bottom-0 left:-25px text-stroke-white ml-1">
            {movies.id}
          </div>
      </div>
        );
       })}
        
    </div>
    </div>

    

  
  );
}

export default Trends;
