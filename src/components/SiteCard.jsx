export default function SiteCard({ logo, thumb, alt }) {
  return (
    <>
      <div className="max-w-96 m-auto pt-2 pb-6 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-slate-0.5 hover:shadow-md hover:shadow-slate-500">
        <img src={logo} alt="logo-bintaro" className="w-[140px] m-auto" />
        <img src={thumb} alt={alt} className="w-3xs m-auto mt-2 px-4" />
      </div>
    </>
  );
}
