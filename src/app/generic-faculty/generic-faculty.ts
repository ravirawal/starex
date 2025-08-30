import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyService } from '../services/facultyService';
import { Subscription } from 'rxjs/internal/Subscription';
import { FACULTY_LIST } from '../services/data';

@Component({
  selector: 'app-generic-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-faculty.html',
  styleUrl: './generic-faculty.scss'
})
export class FacultyComponent implements OnInit, OnDestroy {
  facultyList: any[] = [];
  private sub!: Subscription;

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.sub = this.facultyService.getSearchTerm().subscribe(term => {
      console.log('Search term received in FacultyComponent:', term);
      if (!term) {
        this.facultyList = FACULTY_LIST['pharmaceutics']|| [];
        return;
      }

      const allFaculty = this.facultyService.getAllFaculty();

      if (term.name) {
        const normalizedName = term.name.toLowerCase().replace(/[^a-z\s]/g, '').trim();
        this.facultyList = allFaculty.filter(f =>
          f.name.toLowerCase().replace(/[^a-z\s]/g, '').includes(normalizedName)
        );
        return;
      }

      if (term.designation || term.department) {
        if (Object.keys(FACULTY_LIST).some(key => key === term.department)) {
          this.facultyList = FACULTY_LIST[term.department!];
          return
        }
        this.facultyList = allFaculty.filter(f => {
          const title = f.title.toLowerCase();
          const matchesDesignation = term.designation ? title.includes(term.designation.toLowerCase()) : true;
          const matchesDepartment = term.department ? title.includes(term.department.toLowerCase()) : true;
          return matchesDesignation && matchesDepartment;
        });
        return;
      }

      this.facultyList = allFaculty;
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
