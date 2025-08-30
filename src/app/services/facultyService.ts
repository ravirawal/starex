import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FACULTY_LIST } from './data';
import { Faculty, FacultySearchTerm } from './modal';

@Injectable({ providedIn: 'root' })
export class FacultyService {
  private facultyList = FACULTY_LIST;

  private searchTermSubject = new BehaviorSubject<FacultySearchTerm | null>(null);

setSearchTerm(term: FacultySearchTerm) {
  this.searchTermSubject.next(term);
}

getSearchTerm(): Observable<FacultySearchTerm | null> {
  return this.searchTermSubject.asObservable();
}

  getAllFaculty(): Faculty[] {
    return Object.values(this.facultyList).flat();
  }

  getFacultyByDepartment(dept: string): Faculty[] {
    return this.facultyList[dept] || [];
  }

  getFacultyByDesignationAndDepartment(designation: string, department?: string): Faculty[] {
    return this.getAllFaculty().filter(f => {
      const title = f.title.toLowerCase();
      const matchesDesignation = title.includes(designation.toLowerCase());
      const matchesDepartment = department ? title.includes(department.toLowerCase()) : true;
      return matchesDesignation && matchesDepartment;
    });
  }
}
