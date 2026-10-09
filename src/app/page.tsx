import { eventCoordinators, staffCoordinators } from '@/data/events';

{/* ... inside page.tsx coordinators wrapper ... */}
<div className="space-y-12">
  <div>
    <h2 className="text-[#FB8500] text-sm font-black uppercase tracking-[0.4em] mb-8 text-center border-b border-white/10 pb-4">
      Student Coordinators By Event
    </h2>
    <div className="space-y-6">
      {eventCoordinators.map((group, idx) => (
        <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
          <h3 className="text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-3">
            {group.event}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {group.contacts.map((contact, cIdx) => (
              <div 
                key={cIdx} 
                className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5 text-[11px]"
              >
                <span className="text-slate-200 font-medium">{contact.name}</span>
                {contact.phone ? (
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="text-[#FB8500] font-mono hover:underline font-bold"
                  >
                    📞 {contact.phone}
                  </a>
                ) : contact.role ? (
                  <span className="text-slate-400 italic text-[10px]">{contact.role}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-[#FFB703] text-sm font-black uppercase tracking-[0.4em] mb-8 text-center border-b border-white/10 pb-4">
      Faculty Coordinators
    </h2>
    <div className="space-y-3 px-2">
      {staffCoordinators.map((name, i) => (
        <div key={i} className="bg-white/[0.04] backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs text-slate-300 font-bold text-center italic">
          {name}
        </div>
      ))}
    </div>
  </div>
</div>
