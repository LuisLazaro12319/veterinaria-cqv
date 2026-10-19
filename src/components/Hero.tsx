import React from 'react';
import { CalendarClock, HeartHandshake, MapPin, PawPrint } from 'lucide-react';
import { CLINIC } from '../data/clinicData';

/** Datos reales de su ficha de Google y del WhatsApp para la fila de cifras. */
const CIFRAS = [
  { valor: CLINIC.patientsServed, etiqueta: 'Pacientes atendidos' },
  { valor: CLINIC.googleReviews, etiqueta: 'Opiniones de clientes' },
  { valor: 'WhatsApp', etiqueta: 'Turnos directos' },
];

export const Hero: React.FC = () => {
  /* Lleva a la sección con un desplazamiento explícito: no depende del salto por ancla del navegador,
     que en algunos celulares se queda quieto cuando la página tiene cintas animadas. */
  const irA = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const margen = parseFloat(getComputedStyle(el).scrollMarginTop) || 80;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - margen, behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
  };

  const foto = CLINIC.photo ? `${import.meta.env.BASE_URL}${CLINIC.photo}` : null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-indigo-200/50 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-100/60 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
        {/* Texto */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-300 bg-white/80 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-6">
            <PawPrint className="w-3.5 h-3.5" />
            <span>Veterinaria</span>
            <span aria-hidden="true">·</span>
            <span>{CLINIC.locality}</span>
          </div>

          <h1
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.08] font-extrabold tracking-tight text-indigo-950 mb-6"
            style={{ textWrap: 'balance' }}
          >
            {CLINIC.headline}{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent box-decoration-clone">
              {CLINIC.headlineHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
            Veterinaria en {CLINIC.locality}: {CLINIC.servicesSummary}. Pedí tu turno por WhatsApp.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8 lg:mb-10">
            <a
              href="#turnos"
              onClick={irA('turnos')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm md:px-5 md:py-3 lg:px-7 lg:py-4 lg:text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Reservar turno</span>
            </a>
            <a
              href="#ubicacion"
              onClick={irA('ubicacion')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm md:px-5 md:py-3 lg:px-7 lg:py-4 lg:text-base font-semibold text-indigo-900 bg-white hover:bg-indigo-50 border border-indigo-200 rounded-xl shadow-md shadow-indigo-900/10 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Cómo llegar</span>
            </a>
          </div>

          {/* Cifras reales, con divisores verticales */}
          <dl className="grid grid-cols-3 max-w-xl divide-x divide-indigo-200">
            {CIFRAS.map((c, i) => (
              <div key={c.etiqueta} className={i === 0 ? 'pr-3 lg:pr-6' : 'px-3 lg:px-6'}>
                <dt className="sr-only">{c.etiqueta}</dt>
                <dd className="text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-700 leading-none mb-1.5">{c.valor}</dd>
                <p className="text-[10px] md:text-[11px] lg:text-xs font-bold uppercase tracking-wider text-slate-500">{c.etiqueta}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagen con insignias flotantes */}
        <div className="relative lg:pl-6 max-sm:max-w-md max-sm:mx-auto max-sm:w-full">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/20 aspect-[4/5] bg-gradient-to-br from-indigo-300 via-indigo-200 to-sky-200">
            {foto ? (
              <img src={foto} alt={`${CLINIC.name}, ${CLINIC.locality}`} className="w-full h-full object-cover object-[50%_32%]" />
            ) : (
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <PawPrint className="absolute top-[10%] left-[12%] w-14 h-14 text-white/40 -rotate-12" />
                <PawPrint className="absolute top-[18%] right-[14%] w-10 h-10 text-white/35 rotate-12" />
                <PawPrint className="absolute bottom-[16%] left-[18%] w-12 h-12 text-white/35 rotate-6" />
                <PawPrint className="absolute bottom-[10%] right-[12%] w-16 h-16 text-white/40 -rotate-6" />
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-indigo-900/10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo-cqv.png`}
                    alt={`Logo de ${CLINIC.name}`}
                    className="h-40 sm:h-52 w-auto"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="levitar absolute top-5 right-3 sm:-right-3 lg:-right-4 rounded-2xl bg-indigo-900 text-white px-4 py-3 shadow-xl shadow-indigo-950/30 text-center">
            <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold leading-none">
              <PawPrint className="w-5 h-5 text-amber-300" />
              <span>{CLINIC.patientsServed}</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 mt-1">pacientes atendidos</div>
          </div>

          <div className="levitar-b absolute bottom-5 left-3 sm:-left-3 lg:-left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-indigo-900/15">
            <span className="w-10 h-10 shrink-0 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-slate-900">Turnos por WhatsApp</span>
              <span className="block text-xs text-slate-500">Escribinos y coordinamos</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
