export default function GradientHeading({title}: {title: string}) {
    return (
        <h2 className="text-4xl font-bold tracking-tight from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">{title}</h2>
    );
}