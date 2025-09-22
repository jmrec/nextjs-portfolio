type MainHeadingProps = {
    title: string
}

export default function MainHeading({ title }: MainHeadingProps) {
    return (
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{title}</h1>
    )
}