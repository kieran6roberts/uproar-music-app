import Link from "next/link";

import { parseCookies } from "nookies";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { CgMusicSpeaker } from "react-icons/cg";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiMedal2Line } from "react-icons/ri";

import Button from "../src/components/Button/Button";
import Layout from "../src/containers/Layout/Layout";
import Card from "../src/components/Card/Card";

const Home = () => {
  return (
  <Layout title="Home">
    <main>
      <section 
      id="home-hero"
      className="pt-8">
        <div className="w-4/5 m-auto uppercase">
          <h2 className="text-xxl text-center text-txt font-bold mb-4">
            play
          </h2>
          <h2 className="text-xl text-center text-txt font-bold mb-4">
            discover
          </h2>
          <h2 className="text-lg text-center text-txt mb-8">
            personalize
          </h2>
        </div>
        <div className="">
            <Button
            route="/login"
            extra="w-2/5 max-w-40 border border-pink-200 m-auto text-txt hover:bg-sec hover:text-sec">
              login
            </Button>
            <Button
            route="/register"
            extra="w-2/5 max-w-40 m-auto border border-indigo-500 text-txt hover:bg-sec hover:text-sec">
              sign up
            </Button>
        </div>
        <HiOutlineArrowNarrowDown className="w-max text-lg text-gray-300 m-auto my-16 animate-bounce"/>
      </section>
      <section className="text-txt px-8 md:px-12 xl:px-16">
        <p className="text-xs text-center uppercase font-bold">
          come an see what upRoar has to offer
        </p>

        <div className="w-4/5 m-auto h-0.5 bg-gray-300 mt-4 mb-16" />

        <div className="lg:flex">
          <div className="lg:flex-1 mx-3">
            <Card title="connect"
            bgClr="bg-pink-400"
            text="enhance your experience with spotify"
            icon={<VscDebugDisconnect className="text-xxl text-white"/>} />
            <p className="text-sm mt-8 mb-32">
              Through spotify's developer API you have access to all the tracks, artists and albums you
              could ever wish to need. Sign up to upRoar before connecting your new account to
              your exisiting spotify profile in seconds and lose yourself in the music.
            </p>
          </div>
          <div className="lg:flex-1 mx-3">
            <Card title="Discover"
            bgClr="bg-yellow-200"
            text="Search through thousands of tracks, albums and playlists"
            icon={<CgMusicSpeaker className="text-xxl text-black"/>} />
            <p className="text-sm mt-8 mb-32">
              Through spotify's developer API you have access to all the tracks, artists and albums you
              could ever wish to need. Have something in mind, then use our searchbar and discover
              yourself what is out there.
            </p>
          </div>
          <div className="lg:flex-1 mx-3">
            <Card title="Recommendations"
            bgClr="bg-purple-400"
            text="Get personal artist recommendations"
            icon={<RiMedal2Line className="text-xxl text-white"/>} />
            <p className="text-sm mt-8 mb-32">
              Get access to upRoar's artists recommendations based on your current spotify tastes. 
              Visit our discover page and listen to new and trending hits, as well as artists 
              who we think you might like.
            </p>
          </div>
        </div>
      </section>

      <div className="w-4/5 m-auto h-0.5 bg-gray-300 mt-4 mb-16" />

      <section>
        <div className="text-center text-txt mb-16">
          <h3 className="text-lg mb-4">
            upRoar Music App
          </h3>
          <p className="text-xl text-txt font-bold mb-8">
            100% free 
          </p>
          <ul className="text-sm uppercase">
            <li className="mb-4 border-t-2 border-b-2 border-pink-200 w-2/5 m-auto p-2">
              all tracks
            </li>
            <li className="mb-4 text-txt border-t-2 border-b-2 border-yellow-200 w-2/5 m-auto p-2">
              all albums
            </li>
            <li className="mb-4 border-b-2 border-t-2 border-purple-400 w-2/5 m-auto p-2">
              all playlists
            </li>
          </ul>

          <p className="text-xs text-center text-txt mb-12 mt-20">
            Sign up today for free and enjoy the latest and greatest from the world of music
            for absolutely free!
          </p>

          <Button
          route="/register"
          extra="w-2/5 max-w-40 m-auto border border-indigo-500 text-txt hover:bg-sec hover:text-sec">
            sign up
          </Button>
        </div>
      </section>
    </main>
  </Layout>
  )
};

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;
  if (jwt) {
    return {
      redirect: {
        destination: "/dashboard",
        permanenet: false
      }
    }
  }
  return {
    props: {}
  }
}

export default Home;