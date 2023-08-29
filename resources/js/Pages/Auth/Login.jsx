import { useEffect } from 'react';
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Head, Link ,useForm} from "@inertiajs/react";
import InputError from '@/Components/InputError';

export default function Login({ status, canResetPassword }){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    // <!-- Desktop Only -->
    return (
    <>
        <Head title="Login"/>
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
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>

                    {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                    forInput="email"
                                    value="Email"
                                />
                                <TextInput
                                    type="email" name="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    autoComplete="email"
                                    isFocused={true}
                                    handleChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel
                                    forInput="password"
                                    value="Password"
                                />
                                <TextInput
                                    type="password" name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    handleChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">

                            <Button type="submit" variant="primary"  disabled={processing}>
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </Button>
                            <Link href={route('register')}>
                                <Button type="button" variant="light-outline">
                                    <span className="text-base text-white">
                                        Create New Account
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
