import { Component } from '@angular/core';
import { Employee } from '../data.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees: Employee[] = [
    {
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: new Date('1990-01-01'),
      basicSalary: 50000,
      status: 'Active',
      group: 'IT',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      username: 'jane_smith',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      birthDate: new Date('1985-05-15'),
      basicSalary: 60000,
      status: 'Active',
      group: 'HR',
      description: 'Consectetur adipiscing elit'
    },
    {
      username: 'alice_walker',
      firstName: 'Alice',
      lastName: 'Walker',
      email: 'alice.walker@example.com',
      birthDate: new Date('1988-10-20'),
      basicSalary: 55000,
      status: 'Inactive',
      group: 'Finance',
      description: 'Sed do eiusmod tempor incididunt'
    },
    {
      username: 'bob_jones',
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob.jones@example.com',
      birthDate: new Date('1992-03-12'),
      basicSalary: 48000,
      status: 'Probation',
      group: 'Marketing',
      description: 'Ut enim ad minim veniam'
    },
    {
      username: 'emma_thompson',
      firstName: 'Emma',
      lastName: 'Thompson',
      email: 'emma.thompson@example.com',
      birthDate: new Date('1983-08-28'),
      basicSalary: 70000,
      status: 'Contract',
      group: 'Admin',
      description: 'Quis nostrud exercitation ullamco'
    },
    {
      username: 'charlie_brown',
      firstName: 'Charlie',
      lastName: 'Brown',
      email: 'charlie.brown@example.com',
      birthDate: new Date('1991-07-23'),
      basicSalary: 62000,
      status: 'Active',
      group: 'Sales',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      username: 'david_clark',
      firstName: 'David',
      lastName: 'Clark',
      email: 'david.clark@example.com',
      birthDate: new Date('1987-12-30'),
      basicSalary: 53000,
      status: 'Inactive',
      group: 'Operations',
      description: 'Consectetur adipiscing elit'
    },
    {
      username: 'frank_edwards',
      firstName: 'Frank',
      lastName: 'Edwards',
      email: 'frank.edwards@example.com',
      birthDate: new Date('1993-09-05'),
      basicSalary: 45000,
      status: 'Probation',
      group: 'Support',
      description: 'Sed do eiusmod tempor incididunt'
    },
    {
      username: 'grace_hill',
      firstName: 'Grace',
      lastName: 'Hill',
      email: 'grace.hill@example.com',
      birthDate: new Date('1984-04-18'),
      basicSalary: 68000,
      status: 'Active',
      group: 'Finance',
      description: 'Ut enim ad minim veniam'
    },
    {
      username: 'hannah_jones',
      firstName: 'Hannah',
      lastName: 'Jones',
      email: 'hannah.jones@example.com',
      birthDate: new Date('1982-11-11'),
      basicSalary: 72000,
      status: 'Contract',
      group: 'Admin',
      description: 'Quis nostrud exercitation ullamco'
    },
    {
      username: 'ian_kelly',
      firstName: 'Ian',
      lastName: 'Kelly',
      email: 'ian.kelly@example.com',
      birthDate: new Date('1994-03-17'),
      basicSalary: 49000,
      status: 'Probation',
      group: 'Marketing',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      username: 'julia_lee',
      firstName: 'Julia',
      lastName: 'Lee',
      email: 'julia.lee@example.com',
      birthDate: new Date('1989-06-02'),
      basicSalary: 54000,
      status: 'Active',
      group: 'IT',
      description: 'Consectetur adipiscing elit'
    },
    {
      username: 'kevin_miller',
      firstName: 'Kevin',
      lastName: 'Miller',
      email: 'kevin.miller@example.com',
      birthDate: new Date('1986-02-20'),
      basicSalary: 61000,
      status: 'Inactive',
      group: 'HR',
      description: 'Sed do eiusmod tempor incididunt'
    },
    {
      username: 'linda_nelson',
      firstName: 'Linda',
      lastName: 'Nelson',
      email: 'linda.nelson@example.com',
      birthDate: new Date('1995-10-15'),
      basicSalary: 46000,
      status: 'Probation',
      group: 'Support',
      description: 'Ut enim ad minim veniam'
    },
    {
      username: 'michael_owen',
      firstName: 'Michael',
      lastName: 'Owen',
      email: 'michael.owen@example.com',
      birthDate: new Date('1980-12-03'),
      basicSalary: 72000,
      status: 'Contract',
      group: 'Admin',
      description: 'Quis nostrud exercitation ullamco'
    },
    {
      username: 'nancy_perez',
      firstName: 'Nancy',
      lastName: 'Perez',
      email: 'nancy.perez@example.com',
      birthDate: new Date('1997-08-10'),
      basicSalary: 47000,
      status: 'Active',
      group: 'Sales',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      username: 'oliver_quinn',
      firstName: 'Oliver',
      lastName: 'Quinn',
      email: 'oliver.quinn@example.com',
      birthDate: new Date('1981-05-25'),
      basicSalary: 59000,
      status: 'Inactive',
      group: 'Operations',
      description: 'Consectetur adipiscing elit'
    },
    {
      username: 'patricia_ross',
      firstName: 'Patricia',
      lastName: 'Ross',
      email: 'patricia.ross@example.com',
      birthDate: new Date('1996-09-12'),
      basicSalary: 53000,
      status: 'Probation',
      group: 'Support',
      description: 'Sed do eiusmod tempor incididunt'
    },
    {
      username: 'quentin_smith',
      firstName: 'Quentin',
      lastName: 'Smith',
      email: 'quentin.smith@example.com',
      birthDate: new Date('1990-01-14'),
      basicSalary: 67000,
      status: 'Active',
      group: 'Finance',
      description: 'Ut enim ad minim veniam'
    },
    {
      username: 'rachel_taylor',
      firstName: 'Rachel',
      lastName: 'Taylor',
      email: 'rachel.taylor@example.com',
      birthDate: new Date('1983-07-29'),
      basicSalary: 58000,
      status: 'Contract',
      group: 'Admin',
      description: 'Quis nostrud exercitation ullamco'
    }
  ];

  currentPage: number = 1; // Halaman saat ini default
  pageSize: number = 5; // Jumlah item per halaman default
  totalPages: number = 0;
  sortOrder: 'asc' | 'desc' = 'asc'; // State untuk urutan sorting
  sortColumn: string = ''; // Default sorting berdasarkan data pertama ke terakhir

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.updatePaging();
  }

  // Fungsi untuk menetapkan data karyawan pada halaman yang dipilih
  getPagedEmployees(): Employee[] {
    this.sortEmployees(); // Terapkan sorting sebelum mem-paginasi
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.employees.length);
    return this.employees.slice(startIndex, endIndex);
  }

  // Fungsi untuk memperbarui total halaman
  updatePaging(): void {
    this.totalPages = Math.ceil(this.employees.length / this.pageSize);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  // Fungsi untuk pindah ke halaman sebelumnya
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Fungsi untuk pindah ke halaman berikutnya
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onChangePageSize(value: string): void {
    this.pageSize = +value;
    this.currentPage = 1; // Kembali ke halaman pertama setiap kali mengubah jumlah item per halaman
    this.updatePaging();
  }

  sortEmployees(): void {
    this.employees.sort((a, b) => {
      let aValue = (a as any)[this.sortColumn];
      let bValue = (b as any)[this.sortColumn];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
      }
      if (typeof bValue === 'string') {
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  setSortColumn(column: string): void {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.currentPage = 1; // Reset to first page after sorting
  }

  // Fungsi untuk logout
  logout(): void {
    this.authService.logout();
  }
}
