import { Globe } from "@/components/travel/globe";

const countries = [
  { code: "us", name: "USA" },
  { code: "ca", name: "Canada" },
  { code: "lc", name: "St Lucia" },
  { code: "ie", name: "Ireland" },
  { code: "gb-eng", name: "England" },
  { code: "gb-sct", name: "Scotland" },
  { code: "is", name: "Iceland" },
  { code: "es", name: "Spain" },
  { code: "pt", name: "Portugal" },
  { code: "gi", name: "Gibraltar" },
  { code: "ma", name: "Morocco" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
  { code: "hk", name: "HK" },
  { code: "ph", name: "Philippines" },
  { code: "ae", name: "UAE" },
  { code: "af", name: "Afghanistan" },
]

export default function TravelsPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 space-y-12">
      <Globe />

      <div className="max-w-4xl w-full text-center">
        <h2 className="text-xl font-medium mb-6">Places I've Been</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 place-items-center">
          {countries.map((country) => (
            <div key={country.code} className="flex flex-col items-center">
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={country.name}
                className="w-14 h-8 object-cover rounded shadow"
              />
              <span className="mt-2 text-xs">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
