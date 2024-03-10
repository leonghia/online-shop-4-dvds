export default function GradientHeading({title}: {title: string}) {
    return (
        <h2 className="text-4xl font-bold tracking-tight from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b">{title}</h2>
    );
}