export const SITE = {
  name: 'Aparto-Hotel Florencia',
  legalName: 'Aparto-Hotel Florencia, C.A.',
  rif: 'J-29722064-0',
  tagline: 'Servicios de alojamiento en Güiria, Estado Sucre',
  phoneDisplay: '+58 414-3942088',
  phoneTel: '+584143942088',
  whatsapp: '584143942088',
  emails: {
    reservas: 'reservas@apartohotelflorencia.com',
    general: 'apartohotelflorencia@gmail.com',
  },
  address: 'Calle Bolívar s/n frente a Calle El Consejo, Güiria, Estado Sucre, Venezuela',
  addressShort: 'Calle Bolívar s/n, Güiria, Estado Sucre',
  mapsUrl: 'https://maps.app.goo.gl/DNouadbV54QuvSFe9',
  mapsEmbed:
    'https://www.google.com/maps?q=Aparto-Hotel%20Florencia%2C%20Calle%20Bol%C3%ADvar%2C%20G%C3%BCiria%2C%20Estado%20Sucre%2C%20Venezuela&output=embed',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100070778569091',
    instagram: 'http://www.instagram.com/apartohotelflorencia',
  },
  url: 'https://www.apartohotelflorencia.com',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}