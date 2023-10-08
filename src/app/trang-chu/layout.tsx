"use client";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
        {children}
    </main>
  );
}
