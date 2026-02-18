import NavBar from "@/components/navbar/navbar";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}