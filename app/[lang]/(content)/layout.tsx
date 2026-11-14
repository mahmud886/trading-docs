export default async function ContentLayout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl px-3 sm:px-5 xl:px-6 py-10">{children}</div>;
}
