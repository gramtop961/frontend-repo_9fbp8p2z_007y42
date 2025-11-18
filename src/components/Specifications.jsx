import Seo from './Seo'

export default function Specifications(){
  return (
    <div>
      <Seo title="Technical Specifications – The Doorway Company" description="Explore materials, construction, insulation and security features of our composite doors. Built for durability, efficiency and safety." />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl text-slate-900">Technical Specifications</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">Every Doorway Co composite door is engineered to deliver long-term performance. Below is a transparent overview of the materials and technology we use to keep your home secure, warm and quiet.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <SpecCard title="Construction" items={[
              'Outer skin formed from impact-resistant Glass Reinforced Plastic (GRP)',
              'High-density polyurethane foam core for strength-to-weight performance',
              'Laminated timber sub-frame and moisture-resistant rails',
              'Colour-fast finish designed to resist fading and warping'
            ]}/>
            <SpecCard title="Thermal & Acoustic" items={[
              'U-values as low as 1.0 W/m²K depending on specification',
              'Thermal break thresholds and warm-edge glazing units',
              'Multi-chambered frames to limit heat transfer',
              'Outstanding acoustic attenuation for a quieter home'
            ]}/>
            <SpecCard title="Security" items={[
              'PAS 24:2016 performance with optional “Secured by Design” package',
              'High-security multi-point locking and anti-snap cylinders',
              'Hinges and keeps fixed into reinforced frame positions',
              'Toughened / laminated glazing options'
            ]}/>
            <SpecCard title="Finishes & Hardware" items={[
              'Extensive colour palette including muted greens and deep blues',
              'Authentic woodgrain textures and refined smooth finishes',
              'Premium letterplates, knockers and handles in multiple finishes',
              'Low thresholds available for improved accessibility'
            ]}/>
          </div>
        </div>
      </section>
    </div>
  )
}

function SpecCard({title, items}){
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
      <h3 className="font-semibold text-slate-900 mb-3">{title}</h3>
      <ul className="list-disc list-inside text-slate-700 space-y-1">
        {items.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>
    </div>
  )
}
