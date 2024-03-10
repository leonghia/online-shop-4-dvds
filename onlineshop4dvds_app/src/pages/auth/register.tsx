import RegisterForm from "@/components/auth/register-form";
import Layout from "@/components/layouts/layout";

export default function RegisterPage() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div
                    className="flex h-screen w-screen items-center justify-center overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
                    style={{
                        backgroundImage:
                            'url("../black-background-texture.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }}
                >
                    <div className="absolute left-10 top-10">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                height={40}
                                viewBox="0 0 32 32"
                                width={40}
                                className="text-white"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <p className="font-medium text-white">OnlineShop4DVDS</p>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-10 hidden md:block">
                        <p className="max-w-xl text-white/60">
                            <span className="font-medium"></span>Welcome to OnlineShop4DVDS, your destination for timeless tunes and the latest hits on CD!<span className="font-medium"></span>
                        </p>
                    </div>
                    <RegisterForm />
                </div>
            </div>

        </Layout>
    );
}