import { useState } from 'react';

/**
 * Interactive FAQ accordion.
 * Props: items = [{ q: string, a: string }]
 */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
            >
              <span className="text-lg font-black text-brand-text">{item.q}</span>
              <span
                className={`shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-blue font-black text-xl shadow-sm transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-brand-muted font-medium leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
