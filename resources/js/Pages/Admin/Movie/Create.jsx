import { Head, Link ,useForm} from "@inertiajs/react";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";

export default function Create({auth}){
    const {setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };
    return (
        <AuthenticatedUser auth={auth}>
            <Head title="Create Movie"/>
            <h1 className="text-xl">Create Movie</h1>
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
                            placeholder="Enter Movie Name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
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
                            placeholder="Enter Movie caregory"
                            handleChange={onHandleChange}
                            required
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
                            placeholder="Enter Movie Video URL"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.video_url} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="thumbnail"
                            value="Thumbnail"
                        />
                        <TextInput
                            type="file" name="thumbnail"
                            variant="primary-outline"
                            placeholder="Enter Movie Thumbnail"
                            handleChange={onHandleChange}
                            required
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
                            placeholder="Enter Movie Rating"
                            handleChange={onHandleChange}
                            required
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
                            onChange={(e)=> setData("is_featured",e.target.checked)}
                        />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    <Button type="submit" variant="primary"  disabled={processing}>
                        <span className="text-base font-semibold">
                            Create
                        </span>
                    </Button>
                </div>
            </form>
        </AuthenticatedUser>
    )
}
