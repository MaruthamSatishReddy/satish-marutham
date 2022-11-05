interface SanitySchema {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
export interface PageInfo extends SanitySchema {
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: image;
  backGroundInformation: string;
  profilePic: image;
  phoneNo: string;
  email: string;
  address: string;
}

export interface Technology extends SanitySchema {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}
export interface Skill extends SanitySchema {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}
export interface Experience extends SanitySchema {
  _type: 'experience';
  company: string;
  companyImage: image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
export interface Project extends SanitySchema {
  _type: 'project';
  image: Image;
  linkToBuild: string;
  technologies: Technology[];
  summary: string;
  title: string;
}

export interface Social extends SanitySchema {
  _type: 'social';
  title: string;
  url: string;
}
