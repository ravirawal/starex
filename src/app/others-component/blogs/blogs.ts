import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
  standalone: true
})
export class BlogsComponent {
blogPosts =  [
  {
    "title": "The role of technology in education: In today’s rapidly changing world.",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/The-role-of-technology.webp",
    "alt": "The role of technology in education",
    "author": "Admin",
    "date": "19-Jun-2024",
    "link": "https://www.starexuniversity.com/post/The-role-of-technology"
  },
  {
    "title": "Alumni Success Stories: How Starex University Graduates Are Making a Difference in the World",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/alumni_success.jpg",
    "alt": "Alumni Success Stories",
    "author": "Admin",
    "date": "05-Jun-2024",
    "link": "https://www.starexuniversity.com/post/alumni-success-stories"
  },
  {
    "title": "The Scope of Pharmacognosy: From Botanical Studies to Drug Development",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/The_Scope_of_Pharmacognosy-min.jpg",
    "alt": "Scope of Pharmacognosy",
    "author": "Admin",
    "date": "20-May-2024",
    "link": "https://www.starexuniversity.com/post/scope-of-pharmacognosy"
  },
  {
    "title": "Breaking Bread and Building Bridges: How Food Can Fuel Powerful Professional Connections",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/Breaking_Bread_and_Building_Bridges.png",
    "alt": "Breaking Bread and Building Bridges",
    "author": "Admin",
    "date": "22-Feb-2024",
    "link": "https://www.starexuniversity.com/post/breaking-bread-and-building-bridges-how-food-can-fuel-powerful-professional-connections"
  },
  {
    "title": "The Implementation of Uniform Civil Code: Need of the Hour",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/Implementation_of_Uniform_Civil_Code.png",
    "alt": "Uniform Civil Code",
    "author": "Admin",
    "date": "14-Feb-2024",
    "link": "https://www.starexuniversity.com/post/the-implementation-of-uniform-civil-code-need-of-the-hour"
  },
  {
    "title": "Protection of Human Rights in India - A Brief Review",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/human_rights_in_india.png",
    "alt": "Human Rights in India",
    "author": "Admin",
    "date": "05-Feb-2024",
    "link": "https://www.starexuniversity.com/post/protection-of-human-rights-in-india-a-brief-review"
  },
  {
    "title": "Analysing the New Criminal Laws Impact on India's Modern Legal Framework",
    "image": "https://www.starexuniversity.com/uploads/StarexBlogs/new_criminal_laws_impact.png",
    "alt": "New Criminal Laws Impact",
    "author": "Admin",
    "date": "03-Feb-2024",
    "link": "https://www.starexuniversity.com/post/analysing-the-new-criminal-laws-impact-on-indias-modern-legal-framework"
  }
]

}