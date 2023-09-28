
interface Sponsors {
    name: string;
    website: string;
}

const sponsors: Sponsors[] = [{name: "Luca Cavallin", website: "https://cavall.in/"}]

const SponsorsLinks = () => (
  <div className="text-sm pt-3">
    <ul>
        {sponsors.map((sponsor) => <li key={sponsor.website} className="truncate w-full w-min-300px"><a className="pl-4 hover:underline text-juniper" href={sponsor.website} target="_blank" rel="noopener">{sponsor.name}</a></li>)}
    </ul>
  </div>
);

export const SidebarSponsorsSection = () => {
  return (
    <div className="mt-3">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">Sponsors</h3>
      <p className="text-sm">
        Sponsors financially support us and allow us to continue our work expanding the open-source community.
      </p>
      <SponsorsLinks />
    </div>
  );
};
