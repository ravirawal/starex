export interface Faculty {
  name: string;
  photo: string; // make this required
  title: string;
  research: string;
  bio: string;
  email?: string; // optional is fine here
}

export interface FacultySearchTerm {
  name?: string;
  designation?: string;
  department?: string;
}

