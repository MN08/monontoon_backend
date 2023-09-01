import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Index({auth,flashMessage,movies}){
    return(
    <AuthenticatedUser auth={auth}>
        <Link href={route('admin.dashboard.movie.create')}>
            <Button type="button" className="w-40 mb-8">
                + Add New Movie
            </Button>
        </Link>
        {flashMessage?.message &&(
            <FlashMessage message={flashMessage.message}/>
        )}
        <table className="w-full text-center table-fixed">
            <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                    <tr key={movie.id}>
                        <td>
                            <img src={`/storage/${movie.thumbnail}`} alt="thumbnail" className="w-32 rounded-md" />
                        </td>
                        <td>
                            {movie.name}
                        </td>
                        <td>
                            {movie.category}
                        </td>
                        <td>
                            {movie.rating.toFixed(1)}
                        </td>
                        <td>
                           <Link href={route('admin.dashboard.movie.edit',movie.id)}>
                                <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                           </Link>
                        </td>
                        <td>
                            <Button type="button" variant="danger">
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </AuthenticatedUser>
    )
}
