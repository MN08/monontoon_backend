import { Head ,router,useForm} from "@inertiajs/react";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";

export default function Edit({auth,movie}){
    const {data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if(data.thumbnail === movie.thumbnail){
            delete data.thumbnail;
        }
        router.put(route('admin.dashboard.movie.update',movie.id),{
            // _method:"PUT",
            ...data,
        });
    };
    return (
        <AuthenticatedUser auth={auth}>
            <Head title="Update Movie"/>
            <h1 className="text-xl">Edit Movie {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel
                            forInput="name"
                            value="Name"
                        />
                        <TextInput
                            type="text" name="name"
                            variant="primary-outline"
                            defaultValue={movie.name}
                            placeholder="Enter Movie Name"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="category"
                            value="Category"
                        />
                        <TextInput
                            type="text" name="category"
                            variant="primary-outline"
                            defaultValue={movie.category}
                            placeholder="Enter Movie category"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="video_url"
                            value="Video URL"
                        />
                        <TextInput
                            type="text" name="video_url"
                            variant="primary-outline"
                            defaultValue={movie.video_url}
                            placeholder="Enter Movie Video URL"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.video_url} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="thumbnail"
                            value="Thumbnail"
                        />
                        <img src={`/storage/${movie.thumbnail}`} alt="thumbnail" className="w-40 rounded"/>
                        <TextInput
                            type="file" name="thumbnail"
                            variant="primary-outline"
                            placeholder="Enter Movie Thumbnail"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.thumbnail} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="rating"
                            value="Rating"
                        />
                        <TextInput
                            type="number" name="rating"
                            variant="primary-outline"
                            defaultValue={movie.rating}
                            placeholder="Enter Movie Rating"
                            step="0.01"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        <InputLabel
                            forInput="isFeatured"
                            value="Featured Movie ?"
                            className="mt-1 mr-3"
                        />
                        <Checkbox
                            name="isFeatured"
                            handleChange={(e)=> setData("is_featured",e.target.checked)}
                            checked={movie.is_featured}
                        />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    <Button type="submit" variant="primary"  disabled={processing}>
                        <span className="text-base font-semibold">
                            Update
                        </span>
                    </Button>
                </div>
            </form>
        </AuthenticatedUser>
    )
}
