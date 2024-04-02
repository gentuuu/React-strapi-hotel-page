import Slider from "../common/slider/Slider"
import HAboutus from "./haboutus/HAboutus"
import HInfo from "./hinfo/HInfo"
import HOffer from "./hoffer/HOffer"
import HBanner from "./hbanner/HBanner"
import Rooms from "../rooms/Rooms"
import HOpinion from "./hopinion/HOpinion"
import HBlog from "./hblog/HBlog"


const Home = () => {
  return (
    <>
        <Slider />
        <HInfo />
        <HAboutus />
        <HOffer />
        <HBanner />
        <Rooms />
        <HOpinion />
        <HBlog />
    </>
  )
}


export default Home