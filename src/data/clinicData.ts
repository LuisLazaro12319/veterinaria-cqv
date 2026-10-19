/**
 * Centro Quirúrgico Veterinario (C.Q.V) - datos del centro.
 * Fuente: ficha de Google Maps, Instagram @cqv.vet y la tarjeta que pasó Luis; el logo también lo pasó Luis.
 * Todo lo que se muestra en la web sale de acá: para otra veterinaria alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: 'Centro Quirúrgico Veterinario',
  initials: 'CQV',
  professional: 'nuestro equipo',
  street: 'Paraguay 1855',
  streets: 'Paraguay 1855 (timbre CQV)',
  locality: 'Ciudad de Buenos Aires',
  province: 'Argentina',
  fullAddress: 'Paraguay 1855 (timbre CQV), C1020 Ciudad Autónoma de Buenos Aires',
  since: 0,
  // A CONFIRMAR: es el teléfono de la ficha de Google y de la tarjeta (11 2613-5803); se asume que atiende por WhatsApp.
  phone: '011 2613-5803',
  whatsappNumber: '5491126135803',
  whatsappDisplay: '11 2613-5803',
  instagramHandle: '@cqv.vet',
  instagramUrl: 'https://www.instagram.com/cqv.vet/',
  email: 'cqv.vet@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/rj5DNdzgFAsAk8VE7',
  coordinates: { lat: -34.5986127, lng: -58.3939148 },
  // Ficha de Google: 4,7 con 278 opiniones (se muestra "+250").
  googleRating: '4.7',
  googleReviews: '+250',
  // Cifra que se muestra en lugar de la calificación de Google (la indicó Luis; A CONFIRMAR con el centro).
  patientsServed: '+100',
  googleNote: 'Opiniones de clientes en Google',
  googleScope: '',
  // Texto en primera persona armado con la descripción de su Instagram y lo que dicen sus clientes en Google (A CONFIRMAR).
  about:
    'Somos un centro de derivaciones quirúrgicas veterinarias, especializado en cuidados críticos. Operamos y acompañamos a perros y gatos que necesitan una cirugía o atención intensiva, con un equipo de profesionales dedicado a cada caso.',
  // Foto principal del inicio (ruta dentro de /public); null muestra una ilustración con huellitas.
  photo: 'images/hero-cqv.jpg' as string | null,
  servicesSummary: 'cirugías, cuidados críticos e internación para perros y gatos',
  paymentMethods: [] as string[],
  hoursSummary: 'Todos los días de 9 a 22 hs',
  headline: 'Cirugía y cuidados críticos',
  headlineHighlight: 'para tu mascota',
  locationLabel: 'Ciudad de Buenos Aires',
};

export interface SocialLink {
  id: 'instagram' | 'facebook' | 'tiktok' | 'threads';
  label: string;
  handle: string;
  url: string;
}

export const SOCIALS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@cqv.vet',
    url: 'https://www.instagram.com/cqv.vet/',
  },
];

export interface Branch {
  id: string;
  label: string;
  zone: string;
  fullAddress: string;
  mapsUrl: string;
  mapQuery: string;
  whatsapp: string;
  whatsappDisplay: string;
  /** Foto de la fachada (ruta dentro de /public); null muestra un recuadro reservado. */
  photo: string | null;
  /** Video del lugar (ruta dentro de /public); si existe se muestra en lugar de la foto. */
  video: string | null;
  showSchedule: boolean;
}

// Una sola sede. Todavía no hay foto de la fachada: se muestra el recuadro reservado.
export const BRANCHES: Branch[] = [
  {
    id: 'paraguay-1855',
    label: 'Paraguay 1855',
    zone: 'Ciudad de Buenos Aires',
    fullAddress: 'Paraguay 1855 (timbre CQV), C1020 Ciudad Autónoma de Buenos Aires',
    mapsUrl: 'https://maps.app.goo.gl/rj5DNdzgFAsAk8VE7',
    mapQuery: '-34.5986127,-58.3939148',
    whatsapp: '5491126135803',
    whatsappDisplay: '11 2613-5803',
    photo: null,
    video: null,
    showSchedule: true,
  },
];

/** Texto para aclarar la sucursal en los mensajes de WhatsApp; vacío si hay una sola sede. */
export const sedeTxt = (b: Branch): string => (BRANCHES.length > 1 ? `, sucursal ${b.label} (${b.zone})` : '');

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users' | 'pin';
  title: string;
  text: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'star', title: '+100 pacientes atendidos', text: 'Más de 250 opiniones de clientes en Google' },
  { icon: 'pin', title: 'En la Ciudad de Buenos Aires', text: 'Paraguay 1855 (timbre CQV)' },
  { icon: 'calendar', title: 'Turnos por WhatsApp', text: 'Escribinos y coordinamos tu turno' },
];

export interface Review {
  author: string | null;
  text: string;
}

// Extractos textuales de opiniones públicas de la ficha de Google Maps (278 opiniones, 4,7).
export const REVIEWS: Review[] = [
  {
    author: 'Tano C.',
    text: 'Lugar super recomendable!! Una atención única. Llevamos a Bella para operarla x megaesofago (producto de estrangulación externa). La verdad q son suoer profesionales y se nota que no son comerciantes. Sin dudas volveriamos a tratarla con ellos',
  },
  {
    author: 'Vie',
    text: 'Acá estuvo internada mi gatita Pepina hace dos años atras. Entró muy crítica y me la devolvieron en un excelente estado. Estoy feliz de poder seguir compartiendo el dia a dia con ella, solo puedo decir gracias. Pepita no queria queria comer y hacian de todo para animarla, hasta catnip le dieron.',
  },
  {
    author: 'Joha D.',
    text: 'Quiero agradecer de todo corazón , por haber asistido a mi hija michina ! Le salvaron la vida gracias a Dios',
  },
  {
    author: 'Carina C.',
    text: 'El lugar desde que entramos nos recibió Antonella con su amabilidad y empatía… Siguiendo por el Dr Diego, que operó a Lorenzo y estuvo en todo momento , atrás de la evolución, enviando videos informando cómo estaba avanzando Lorenzo…',
  },
  {
    author: 'Flor H.',
    text: 'Tenía que hacerle una extracción de vesícula biliar a mi perrita de 12 años (schnauzer mini). Estuve semanas buscando un lugar que me de confianza para poder operarla…',
  },
];

export interface TeamMember {
  role: string;
  name: string | null;
  photo: string | null;
  bio?: string;
  /** Verdadero para la tarjeta de pacientes: muestra varios cuadros de fotos en lugar de la tarjeta con nombre. */
  galeria?: boolean;
  /** Verdadero para la tarjeta del equipo: muestra a todos los profesionales juntos. */
  lista?: boolean;
}

// Fotos y videos de los pacientes (ruta dentro de /public; los .mp4 se muestran como un cuadro que se reproduce
// solo, sin sonido y en bucle). Con menos de 4 elementos se completan 6 cuadros con espacios reservados.
export const PACIENTES_FOTOS: string[] = [
  'images/paciente-1.jpg',
  'images/paciente-2.jpg',
  'images/paciente-3.jpg',
  'images/paciente-4.jpg',
  'images/paciente-5.jpg',
];

export interface Profesional {
  name: string;
  /** "Dr." o "Dra." (se escribe delante del nombre). Vacío si todavía no se sabe. */
  titulo: 'Dr.' | 'Dra.' | '';
  /** Foto (ruta dentro de /public); null muestra un círculo con las iniciales. */
  photo: string | null;
}

// Nombres que pasó Luis (A CONFIRMAR la ortografía de "Peyrelongue" y "Despuys"). Todavía no hay fotos individuales.
export const PROFESIONALES: Profesional[] = [
  { name: 'Ana María Ortegón', titulo: 'Dr.', photo: null },
  { name: 'Diego Peyrelongue', titulo: 'Dr.', photo: null }, // una reseña de Google lo nombra "el Dr Diego"
  { name: 'Natalia Ramírez', titulo: 'Dr.', photo: null },
  { name: 'Nilsa Cejas', titulo: 'Dr.', photo: null },
  { name: 'Sofía Quintilli', titulo: 'Dr.', photo: null },
  { name: 'Gabriela Despuys', titulo: 'Dr.', photo: null },
  { name: 'Pablo Pinto', titulo: 'Dr.', photo: null },
];

// Nosotros: una tarjeta con todo el equipo (varios profesionales) y una tarjeta de pacientes.
export const TEAM: TeamMember[] = [
  { role: 'Nuestro equipo', name: null, photo: null, lista: true },
  {
    role: 'Nuestros pacientes',
    name: null,
    photo: null,
    galeria: true,
    bio: 'Estas son algunas de las mascotas que nos eligen para cuidar su salud.',
  },
];

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon:
    | 'stethoscope'
    | 'sparkles'
    | 'layers'
    | 'shield'
    | 'activity'
    | 'smile'
    | 'crown'
    | 'anchor'
    | 'gem'
    | 'paw'
    | 'syringe'
    | 'scissors'
    | 'heartpulse';
}

// Salen de su Instagram (derivaciones quirúrgicas, cuidados críticos, artroscopia) y de lo que cuentan sus clientes
// en Google (internación, urgencias, ecografía). Las descripciones son A CONFIRMAR con el centro.
export const SERVICES: ServiceItem[] = [
  {
    id: 'cirugias',
    name: 'Cirugías de derivación',
    description: 'Procedimientos quirúrgicos de casos derivados por otros veterinarios, con un equipo especializado.',
    icon: 'scissors',
  },
  {
    id: 'criticos',
    name: 'Cuidados críticos',
    description: 'Atención y monitoreo cercano para pacientes en estado delicado.',
    icon: 'heartpulse',
  },
  {
    id: 'internacion',
    name: 'Internación',
    description: 'Seguimiento y cuidados durante la recuperación de tu mascota.',
    icon: 'paw',
  },
  {
    id: 'urgencias',
    name: 'Urgencias',
    description: 'Atención de casos urgentes. Escribinos por WhatsApp para coordinar.',
    icon: 'activity',
  },
  {
    id: 'artroscopia',
    name: 'Artroscopia',
    description: 'Cirugía articular mínimamente invasiva para tratar lesiones en las articulaciones.',
    icon: 'layers',
  },
  {
    id: 'ecografia',
    name: 'Ecografía',
    description: 'Estudios por imágenes para llegar a un diagnóstico preciso antes de operar.',
    icon: 'stethoscope',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
  /** Segundo turno del día (horario cortado), si lo hay. */
  open2?: string;
  close2?: string;
}

/** Falso si no se conocen los horarios: sin horarios no se muestra "Abierto ahora". */
export const HAS_SCHEDULE = true;

// Horarios de la ficha de Google: todos los días de 9 a 22 hs.
export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '22:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '22:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '22:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '22:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '22:00' },
  { dayName: 'Sábado', dayIndex: 6, open: '09:00', close: '22:00' },
  { dayName: 'Domingo', dayIndex: 0, open: '09:00', close: '22:00' },
];

/** Turnos del día como pares [desde, hasta]; vacío si está cerrado. */
const turnosDelDia = (d?: ScheduleDay): [string, string][] => {
  if (!d) return [];
  const pares: [string | null | undefined, string | null | undefined][] = [
    [d.open, d.close],
    [d.open2, d.close2],
  ];
  return pares.filter((p): p is [string, string] => Boolean(p[0] && p[1]));
};

/** Una línea por turno ("09:00 - 12:30", "16:00 - 18:00") o "Cerrado". */
export function horarioLineas(d: ScheduleDay): string[] {
  const turnos = turnosDelDia(d);
  return turnos.length ? turnos.map(([a, b]) => `${a} - ${b}`) : ['Cerrado'];
}

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const turnos = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === today));
  const abierto = turnos.find(([a, b]) => minutes >= toMinutes(a) && minutes < toMinutes(b));
  if (abierto) {
    return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${abierto[1]} hs` };
  }
  const proximo = turnos.find(([a]) => minutes < toMinutes(a));
  if (proximo) {
    return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${proximo[0]} hs` };
  }

  for (let i = 1; i <= 7; i++) {
    const siguiente = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === (today + i) % 7));
    if (siguiente.length) {
      const dia = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
      const cuando = i === 1 ? 'mañana' : `el ${dia?.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${siguiente[0][0]} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

/** Enlace de WhatsApp con el mensaje armado; sin número usa el de turnos general. */
export function whatsappUrl(message: string, number: string = CLINIC.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
