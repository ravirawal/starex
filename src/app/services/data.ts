import { Faculty } from "./modal";

export const FACULTY_LIST: { [key: string]: Faculty[] }  = {
    pharmaceutics:[
      {
        name: 'Dr. Parveen Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Principal, Pharmaceutics',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Praveen has 20+ years of experience in agricultural research.',
        email: '',
      },
      {
        name: 'Dr. Sushila',
        photo: '/assets/icons/female.svg',
        title: 'Assistant, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
     law:[
      {
        name: 'Dr. Parveen Dahiya',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Madhur Hooda',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    physicalScience:[
      {
        name: 'Dr. Meena physicalScience',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Anju Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    computerScience:[
      {
        name: 'Dr. Amit Kumari',
        photo: '/assets/icons/male.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Sumit kumar',
        photo: '/assets/icons/male.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
     enggTechnology:[
      {
        name: 'Dr. Rohit Bhardawaj',
        photo: '/assets/icons/male.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Nikita Kaushik',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    humanities:[
      {
        name: 'Dr. Mantesh Yadav',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Sushma Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    commerce:[
      {
        name: 'Dr. Ankita Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Nikita Yadav',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
     agriculture:[
      {
        name: 'Dr. Annu Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Varsha Rani',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Chanchal Garg',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    hotelManagement:[
      {
        name: 'Dr. Sumit hotel',
        photo: '/assets/icons/male.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Puneet Hooda',
        photo: '/assets/icons/male.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
    lifeScience:[
      {
        name: 'Dr. Mantesh chemistry',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      },
      {
        name: 'Dr. Meena Kumari',
        photo: '/assets/icons/female.svg',
        title: 'Professor, Agriculture',
        research: 'Crop Science, Sustainable Farming',
        bio: 'Dr. Verma has 20+ years of experience in agricultural research.',
        email: ''
      }
    ],
  }

 export const ROUTE_MATCH = {
  'home': '/home',
  'agriculture': '/agriculture',
  'commerce': '/commerce&management',
  'management': '/commerce&management',
  'computer': '/computerscience&technology',
  'cse': '/computerscience&technology',
  'technology': '/computerscience&technology',
  'engineering': '/engineering&technology',
  'hotel': '/hotel-management',
  'humanities': '/humanities',
  'law': '/law',
  'life science': '/life-science',
  'pharmacy': '/pharmaceutical-science',
  'pharmaceutical': '/pharmaceutical-science',
  'physical science': '/physical-science',
  'vocational': '/vocational-courses',
  'starex': '/about-starex',
  'chancellor': '/chancellor-message',
  'chairman': '/chancellor-message',
  'owner starex': '/chancellor-message',
   'owner of starex': '/chancellor-message',
  'vice chancellor': '/vice-chancellor-message',
  'vice-chancellor': '/vice-chancellor-message',
  'vc': '/vice-chancellor-message',
  'registrar': '/registrar-message',
  'osd': '/osd-message',
  'coe': '/coe',
  'recognition': '/approval-recognition',
  'approval': '/approval-recognition',
  'disclosure': '/disclosure',
  'mou': '/starex-mou',
  'ugc': '/ugc-inspection',
  'annual report': '/annual-reports',
  'ombudsperson': '/ombudsperson',
  'policy': '/policies',
  'policies': '/policies',
  'organogram': '/organogram',
};

  export const DEPARTMENTS: { [key: string]: string } = {
  law: '/law',
  pharmacy: '/pharmaceutical-science',
  pharmaceutics: '/pharmaceutical-science',
  cse: '/computerscience&technology',
  engineering: '/engineering&technology',
  agriculture: '/agriculture',
  physicalscience: '/physical-science',
  lifeScience: '/life-science',
  hotel: '/hotel-management',
  humanities: '/humanities',
  commerce: '/commerce&management',
  management: '/commerce&management',
  vocational: '/vocational-courses'
};

export const DESIGNATIONS = [
  'professor',
  'assistant professor',
  'associate professor',
  'dean',
  'hod'
];

export const TOPICS = [
  'fee',
  'fees',
  'structure',
  'faculty',
  'department',
  'research',
  'names'
];
