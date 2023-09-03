import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";


export default function Dashboard({auth,featuredMovies,movies}){
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    }
    return (
         <Authenticated auth={auth}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                {console.log(auth)}
            </Head>
                 <div className="mb-7">
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                      {featuredMovies.map((featuredMovie)=>(
                        <FeaturedMovie
                        key={featuredMovie.id}
                        slug={featuredMovie.slug}
                        name={featuredMovie.name}
                        category = {featuredMovie.category}
                        thumbnail = {featuredMovie.thumbnail}
                        rating={featuredMovie.rating}/>
                      ))}
                    </Flickity>
                </div>
                {/* browse Movie */}
                <div className="mb-7">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                        {movies.map((movie)=>(
                            <MovieCard
                                key={movie.id}
                                thumbnail={movie.thumbnail}
                                name={movie.name}
                                category={movie.category}
                                slug={movie.slug}
                            />
                        ))}
                    </Flickity>
                </div>
        </Authenticated>
    )
}
