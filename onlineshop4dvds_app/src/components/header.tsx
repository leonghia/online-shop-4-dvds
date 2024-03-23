export default function Header({title, description}: {title: string, description?: string}) {
    return (
        <header className="mb-6 flex w-full items-center justify-between">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-default-900 lg:text-3xl">
                    {title}
                </h1>
                <p className="text-small text-default-400 lg:text-medium">
                    {description}
                </p>
            </div>
        </header>
    );
}