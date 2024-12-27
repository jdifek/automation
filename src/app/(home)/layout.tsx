import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best car rental conditions in Phuket. Only we have full insurance for all cars without deductible, deposit and hidden commissions.",
    description: "Book a car and get the best prices and rental conditions on the whole island of Phuket. Call now: +66659769300",
    openGraph: {
      title: "Best car rental conditions in Phuket. Only we have full insurance for all cars without deductible, deposit and hidden commissions.",
      description: "Book a car and get the best prices and rental conditions on the whole island of Phuket",
    },
  };
}

export default async function LocaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
