import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import AuthenticatedUser from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";


export default function Dashboard(){
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
        <AuthenticatedUser>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
                 <div className="mb-7">
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                      {[1,2,3,4].map(i=>(
                        <FeaturedMovie
                        key={i}
                        slug="the-batman-in-love"
                        name={`The Batman in Love ${i}`}
                        category = "Action"
                        thumbnail = "/images/featured-1.png"
                        rating={i+1}/>
                      ))}
                    </Flickity>
                </div>
                {/* browse Movie */}
                <div className="mb-7">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                        {[1,2,3,4,5,6,7,8].map(i=>(
                            <MovieCard key={i}
                                thumbnail="/images/browse-1.png"
                                name={`Golden Meong ${i}`}
                                category="Comedy . Action"
                                slug="Golden-Meong"
                            />
                        ))}
                    </Flickity>
                </div>
        </AuthenticatedUser>
    )
}
