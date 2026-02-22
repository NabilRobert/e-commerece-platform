
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bold.",
  description: "Premium curated ecommerce experience.",
}

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}