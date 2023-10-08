"use client";

export default function LoginLayout({
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
