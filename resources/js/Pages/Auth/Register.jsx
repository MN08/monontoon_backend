import { useEffect } from 'react';
import InputLabel from "@/Components/InputLabel";
import InputError from '@/Components/InputError';
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Link,Head ,useForm} from "@inertiajs/react";

export default function Register(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };
    // <!-- Desktop Only -->
    return (
    <>
        <Head title="Register"/>
        <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                forInput = "name"
                                value = "Name"
                                />
                                <TextInput
                                    type="text" name="name"
                                    placeholder="Your Fullname.."
                                    value={data.name}
                                    handleChange={onHandleChange}
                                    isFocused={true}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                            <InputLabel
                                forInput = "email"
                                value = "Email"
                                />
                                <TextInput
                                    type="email" name="email"
                                    placeholder="Your Email.."
                                    value={data.email}
                                    handleChange= {onHandleChange}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                            <InputLabel
                                forInput = "password"
                                value = "Password"
                                />
                                <TextInput
                                    type="password" name="password"
                                    placeholder="Your Password.."
                                    value={data.password}
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div>
                            <InputLabel
                                forInput = "password_confirmation"
                                value = "Password Confirmation"
                                />
                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm Your Password.."
                                    value={data.password_confirmation}
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <Button type="submit" variant="primary" disabled={processing}>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </Button>

                            <Link href={route('login')}>
                                <Button type="button" variant="light-outline" >
                                    <span className="text-base font-semibold">
                                    Sign In to My Account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
