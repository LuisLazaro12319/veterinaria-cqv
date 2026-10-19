import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { BRANCHES, CLINIC, HAS_SCHEDULE, SCHEDULE, SOCIALS, horarioLineas } from '../data/clinicData';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { ICONOS_REDES } from './redes';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-200 via-white to-sky-200 text-indigo-950 text-sm border-t-4 border-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-cqv.png`}
              alt={`Logo de ${CLINIC.name}`}
              loading="lazy"
              width={112}
              height={140}
              className="h-36 w-auto"
            />
            <div className="text-lg font-bold text-indigo-950">{CLINIC.name}</div>
            <p className="text-indigo-900 leading-relaxed">Veterinaria: {CLINIC.servicesSummary}.</p>
            {SOCIALS.length > 0 && (
              <p className="text-xs font-semibold text-indigo-900 pt-1">Seguinos para enterarte de promos y sorteos</p>
            )}
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIALS.map((s) => {
                const { Icono, hover } = ICONOS_REDES[s.id];
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} ${s.handle}`}
                    title={s.label}
                    className={`w-9 h-9 rounded-full bg-white/40 text-indigo-950 ${hover} flex items-center justify-center transition-all duration-200`}
                  >
                    <Icono className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
              <a
                href={`https://wa.me/${CLINIC.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/40 text-indigo-950 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-950">Horarios</div>
            {!HAS_SCHEDULE && (
              <p className="text-indigo-900 max-w-xs">
                Consultá los días y horarios de atención por WhatsApp al {CLINIC.whatsappDisplay}.
              </p>
            )}
            <ul className="space-y-1.5 text-indigo-900">
              {SCHEDULE.map((d) => (
                <li key={d.dayName} className="flex justify-between gap-6 max-w-xs">
                  <span>{d.dayName}</span>
                  <span className="font-mono text-xs text-right">
                    {horarioLineas(d).map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-950">Contacto</div>
            <ul className="space-y-2.5 text-indigo-900">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-indigo-800 shrink-0" />
                  <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-950">
                    {b.fullAddress}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-indigo-800 shrink-0" />
                <a href={`https://wa.me/${CLINIC.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-950">
                  {CLINIC.whatsappDisplay}
                </a>
              </li>
              {CLINIC.email && (
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-800 shrink-0" />
                  <a href={`mailto:${CLINIC.email}`} className="hover:text-indigo-950 break-all">
                    {CLINIC.email}
                  </a>
                </li>
              )}
              {CLINIC.instagramUrl && (
                <li className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-indigo-800 shrink-0" />
                  <a href={CLINIC.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-950">
                    {CLINIC.instagramHandle}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-indigo-950/15 text-xs text-indigo-900">
          © {new Date().getFullYear()} {CLINIC.name} · {CLINIC.locality}, {CLINIC.province}
        </div>
      </div>
    </footer>
  );
};
