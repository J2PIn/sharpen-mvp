{realAgencies.map((agency) => (
  <li key={agency.id}>
    <Link href={`/agency/${agency.id}`}>
      <a>{agency.name}</a>
    </Link>
    <div>Sharpen Score: {agency.sharpenScore}</div>
    <div>Main KPI: {agency.mainKPI}</div>
    <div><a href={agency.website} target="_blank" rel="noopener noreferrer">Visit Website</a></div>
  </li>
))}
