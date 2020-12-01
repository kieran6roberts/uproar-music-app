import { FiPlayCircle } from "react-icons/fi";
import { FiPauseCircle } from "react-icons/fi";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import usePlaying from "src/hooks/usePlayer";

const Player = ({ audioSrc }) => {
  const { playing, 
    setPlaying, 
    duration, 
    currentPosition, 
    setClickedPosition } = usePlaying();

  return (
    <div className={`w-full h-40 py-4 border fixed bottom-0 left-0 bg-pri`}>
        <audio id="audio-player">
          <source src={audioSrc}/>
            <code>
              audio
            </code>
        </audio>
      <p className="text-md capitalize text-center">
        track
      </p>
      <p className="text-sm uppercase text-center">
        artist
      </p>
      <div className="relative w-4/5 mx-auto my-4 h-0.5 w-4/5 bg-gray-400" >
        <div 
        className={`relative bottom-2 h-4 w-4 rounded-full bg-red-300 cursor-pointer`} />
      </div>
      <div className="flex justify-center">
        <button>
          <BiSkipPrevious className="text-xl cursor-pointer"/>
        </button>
        <button  onClick={() => setPlaying(!playing)}>
          {playing ?
            <FiPauseCircle
            className="text-xl mx-8 cursor-pointer" />
          :
            <FiPlayCircle 
            className="text-xl mx-8 cursor-pointer" />
          }
        </button>
        <button>
          <BiSkipNext className="text-xl cursor-pointer"/>  
        </button>
      </div>
    </div>
  )
};

export default Player;