import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Index({auth,flashMessage}){
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
    </AuthenticatedUser>
    )
}
