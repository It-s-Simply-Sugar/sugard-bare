import sfjgj from './assets/services-icons/unnamed-3.jpg';
import fullLegs from './assets/services-icons/full-legs.png';
import halfArms from './assets/services-icons/half-arms-lower.png';
import fullArms from './assets/services-icons/full-arms.png';
import fullLegsUpper from './assets/services-icons/half-legs-upper.png';
import feetToes from './assets/services-icons/feet-toes.png';
import ears from './assets/services-icons/ears.png';
import upperLip from './assets/services-icons/upper-lip.png';
import chin from './assets/services-icons/chin.png';
import lipChin from './assets/services-icons/lip-chin.png';
import neck from './assets/services-icons/neck.png';
import bikini from './assets/services-icons/bikini.png';
import brazilian from './assets/services-icons/brazilian.png';
import vajacial from './assets/services-icons/vajacial.png';
import faceMask from './assets/services-icons/face-mask.png';
import eyebrow from './assets/eyebrow.png';
import lash from './assets/eyelash.png';
import lashBrow from './assets/lash-brow.png';
import shoulders from './assets/shoulders.png';
import chestStomach from './assets/chest-stomach.png';
import abTrail from './assets/ab-trail.png';
import innerThigh from './assets/inner-thigh.png';
import sideburns from './assets/sideburns.png';
import fullFace from './assets/full-face.png';

export const popularServices = [
  {
    serviceName: 'Bikini',
    description: 'Removal of hair on the bikini line not to extend to leg or inner thigh area.',
    price: 55,
    image: bikini
  },
  {
    serviceName: 'Brazilian (New Client)',
    description:
      'Removal of all the pubic hair with the sugaring technique which includes the backside but not the cheeks. Cheeks is an additional charge.',
    price: 68,
    image: brazilian
  },
  {
    serviceName: 'Vajacial',
    description:
      'Similar to a traditional face facial, this service includes a double cleanse, light exfoliation, extractions, soothing mask.',
    price: 50,
    image: vajacial
  },
  {
    serviceName: 'Calming Mask',
    description: 'As an add-on, a calming mask can be added to any hair removal service',
    price: 5,
    price2: 25,
    image: faceMask
  }
];

export const bodyServices = [
  {
    serviceName: 'Full Legs',
    description:
      'Removal of hair from the thigh to the ankle, both front and back. Both legs included.',
    price: 88,
    image: fullLegs
  },
  {
    serviceName: 'Half Legs',
    description:
      'Removal of hair from knee up or from knee down to ankle. Front and back of both legs included.',
    price: 50,
    image: fullLegsUpper
  },
  {
    serviceName: 'Feet and Toes',
    description: 'Both feet included in the price.',
    price: 12,
    image: feetToes
  },
  {
    serviceName: 'Neck',
    description: 'Removal of hair for either the front or back of neck.',
    price: 12,
    image: neck
  },
  {
    serviceName: 'Shoulders',
    description: 'Removal of hair from shoulders. Price includes both shoulders.',
    price: 20,
    image: shoulders
  },
  {
    serviceName: 'Full Arms',
    description: 'Removal of hair on upper and lower arms using Sugar.',
    price: 55,
    image: fullArms
  },
  {
    serviceName: 'Half Arms',
    description: 'Removal of hair on upper or lower part of arm. Elbow up or Elbow down.',
    price: 40,
    image: halfArms
  },
  {
    serviceName: 'Chest and Stomach',
    description: 'Both upper and lower torso are included in price.',
    price: 60,
    image: chestStomach
  },
  {
    serviceName: 'Ab Trail',
    description:
      'This does not include lower torso, only ab trail. If you want more than the ab trail please select stomach sugaring.',
    price: 8,
    image: abTrail
  },
  {
    serviceName: 'Inner Thigh',
    description:
      '1/4 of the upper leg, inner thigh only. Please note this service is not for legs that are fully covered in sparse hair. It is specifically for pubic hair that comes out to the inner thigh only.',
    price: 18,
    image: innerThigh
  }
];

export const bikiniServices = [
  {
    serviceName: 'Vajacial',
    description:
      'Similar to a traditional face facial, this service includes a double cleanse, light exfoliation, extractions, soothing mask.',
    price: 50,
    image: vajacial
  },
  {
    serviceName: 'Bikini (New Client)',
    description: 'Removal of hair on the bikini line not to extend to leg or inner thigh area.',
    price: 55,
    image: bikini
  },
  {
    serviceName: 'Bikini w/ Vajacial',
    description:
      'Similar to a traditional face facial, this service includes a double cleanse, light exfoliation, extractions, soothing mask.',
    price: 80,
    image: bikini
  },
  {
    serviceName: 'Bikini w/ Calming Mask',
    description:
      'Aloe & Rose Post Epilation Mask will leave your skin soothed, moisturized and protected.',
    price: 50,
    image: bikini
  },
  {
    serviceName: 'Bikini Maintenance',
    description: 'Removal of regrowth of hair within 4 to 5 weeks from last sugaring appointment.',
    price: 48,
    image: bikini
  },
  {
    serviceName: 'Brazilian (New Client)',
    description:
      'Removal of all the pubic hair with the sugaring technique which includes the backside but not the cheeks. Cheeks is an additional charge.',
    price: 68,
    image: brazilian
  },
  {
    serviceName: 'Brazilian w/ Vajacial',
    description:
      'Similar to a traditional face facial, this service includes a double cleanse, light exfoliation, extractions, soothing mask.',
    price: 100,
    image: brazilian
  },
  {
    serviceName: 'Brazilian with Calming Mask',
    description:
      'Aloe & Rose Post Epilation Mask will leave your skin soothed, moisturized and protected.',
    price: 70,
    image: brazilian
  },
  {
    serviceName: 'Brazilian Maintenance',
    description: 'Removal of regrowth. Must be made within 4 to 5 weeks of last sugaring.',
    price: 60,
    image: brazilian
  },
  {
    serviceName: 'Brazilian over 6 weeks (non-maintenance)',
    description: 'Removal of regrowth from last sugaring. Must be an established client.',
    price: 65,
    image: brazilian
  }
];

export const faceServices = [
  {
    serviceName: 'Full Face',
    description: 'Hair removal using the sugaring technique on entire face including brows.',
    price: 45,
    image: fullFace
  },
  {
    serviceName: 'Full Face w/ Mask',
    description:
      'Hair removal using the sugaring technique on entire face including brows with the addition of a soothing or cooling mask.',
    price: 55,
    price2: 58,
    image: faceMask
  },
  {
    serviceName: 'Brow Shaping',
    description: 'Sugaring price includes both brows',
    price: 28,
    image: eyebrow
  },
  {
    serviceName: 'Brow Maintenance',
    description: 'Removal of regrowth on brow line using sugar. Price includes both brows.',
    price: 20,
    image: eyebrow
  },
  {
    serviceName: 'Ears',
    description: 'Hair is removed from ears. Both ears included.',
    price: 10,
    image: ears
  },
  {
    serviceName: 'Upper Lip',
    description: 'Removal of hair on upper lip.',
    price: 12,
    image: upperLip
  },
  {
    serviceName: 'Chin',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam doloribus',
    price: 15,
    image: chin
  },
  {
    serviceName: 'Lip and Chin',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam doloribus',
    price: 25,
    image: lipChin
  },
  {
    serviceName: 'Sideburns',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam ',
    price: 20,
    image: sideburns
  },
  {
    serviceName: 'Brow Sugaring + Tint',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam ',
    price: 40,
    image: eyebrow
  },
  {
    serviceName: 'Brow Tint',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam ',
    price: 25,
    image: eyebrow
  },
  {
    serviceName: 'Lash Tint',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam ',
    price: 30,
    image: lash
  },
  {
    serviceName: 'Lash + Brow Tint',
    description: 'dolor sit amet consectetur adipisicing elit. Iusto distinctio ipsam ',
    price: 40,
    image: lashBrow
  }
];
