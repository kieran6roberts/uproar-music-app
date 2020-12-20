import { fetcher } from "src/hooks/useFetch";
import { parseCookies } from "nookies";
import Layout from "src/containers/Layout/Layout";
import TrackList from "src/components/TrackList/TrackList";
import Player from "src/components/Player/Player";
import PlayingProvider from "src/context/PlayingContext";

const Albums = ({ album }) => {
    const { tracks: {  items: albumTracks}} = album;
    return (
        <PlayingProvider>
            <Layout>
                <main>
                    <section className="md:px-24">
                        <h2 className="my-8 text-md text-txt">
                            {album ? album.name : <span>Unable to find album</span>}
                        </h2>
                        <p className="mb-4 uppercase text-md text-txt">
                            {album ? album.artists[0].name : null}
                        </p>
                        <p className="mb-2 capitalize text-md text-txt">
                            {album ? album.album_type : null}
                        </p>
                        <TrackList tracks={albumTracks} image={album}  />
                        <Player />
                    </section>
                </main>
            </Layout>
        </PlayingProvider>
    )
};

export async function getServerSideProps(ctx) {
    const query = ctx.query.id
    const authToken = parseCookies(ctx).spaccess;

    const albumQuery = `/v1/albums/${query}`;
    
    const album = await fetcher(`${process.env.SPOTIFY_API}${albumQuery}`, {       
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        }});
  
    return {
      props: {
        album: album
      }
    }
  }

export default Albums;