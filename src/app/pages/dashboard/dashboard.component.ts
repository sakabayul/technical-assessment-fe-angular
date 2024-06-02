import { Component } from '@angular/core';
import { Employee } from '../../model/data.model';
import { Router } from '@angular/router';
import { employees } from '../../data/employees.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Data karyawan
  employees: Employee[] = employees;
  // Buat variabel baru untuk menyimpan salinan data karyawan untuk pencarian
  filteredEmployees: Employee[] = [];

  // Properti untuk paging
  currentPage: number = 1; // Halaman saat ini default
  pageSize: number = 5; // Jumlah item per halaman default
  totalPages: number = 0;

  // Properti untuk sorting
  sortOrder: 'asc' | 'desc' = 'asc'; // State untuk urutan sorting
  sortColumn: string = ''; // Default sorting berdasarkan data pertama ke terakhir

  // Properti untuk pencarian
  searchUsername: string = ''; // Input search berdasarkan username
  searchGroup: string = ''; // Input search berdasarkan group
  searchStatus: string = ''; // Input search berdasarkan status

  // Properti untuk popup modal
  modalVisible: boolean = false;
  selectedUsername: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Salin data asli ke filteredEmployees saat komponen diinisialisasi
    this.filteredEmployees = [...this.employees];
    this.updatePaging();
  }

  // Fungsi untuk menetapkan data karyawan pada halaman yang dipilih
  getPagedEmployees(): Employee[] {
    this.sortEmployees(); // Terapkan sorting sebelum mem-paginasi
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.filteredEmployees.length);
    return this.filteredEmployees.slice(startIndex, endIndex);
  }

  // Fungsi untuk memperbarui total halaman
  updatePaging(): void {
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.pageSize);
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

  // Metode untuk mengubah jumlah item per halaman
  onChangePageSize(value: string): void {
    this.pageSize = +value;
    this.currentPage = 1; // Kembali ke halaman pertama setiap kali mengubah jumlah item per halaman
    this.updatePaging();
  }

  // Metode untuk sorting
  sortEmployees(): void {
    this.filteredEmployees.sort((a, b) => {
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

  // Metode untuk mengatur kolom sorting
  setSortColumn(column: string): void {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.currentPage = 1; // Reset to first page after sorting
    this.updatePaging();
  }

  // Mengambil group dari employee
  getDistinctGroups(): string[] {
    return Array.from(new Set(this.employees.map(employee => employee.group)));
  }

  // Mengambil status dari employee
  getDistinctStatuses(): string[] {
    return Array.from(new Set(this.employees.map(employee => employee.status)));
  }

  search(): void {
    const searchUsername = this.searchUsername.toLowerCase().trim();
    const searchGroup = this.searchGroup.toLowerCase().trim();
    const searchStatus = this.searchStatus.toLowerCase().trim();

    // Filter data pada filteredEmployees berdasarkan kriteria pencarian
    this.filteredEmployees = this.employees.filter(employee => {
      const matchUsername = employee.username.toLowerCase().includes(searchUsername);
      const matchGroup = searchGroup === '' || employee.group.toLowerCase() === searchGroup;
      const matchStatus = searchStatus === '' || employee.status.toLowerCase() === searchStatus;
      return matchUsername && matchGroup && matchStatus;
    });
    console.log(this.filteredEmployees)
    // Perbarui halaman saat ini dan total halaman
    this.currentPage = 1;
    this.updatePaging();
  }

  // Metode untuk menghapus filter dan menampilkan semua data
  clearFilter(): void {
    this.searchUsername = '';
    this.searchGroup = '';
    this.searchStatus = '';
    // Kembalikan data asli ke filteredEmployees
    this.filteredEmployees = [...this.employees];
    // Perbarui halaman saat ini dan total halaman
    this.currentPage = 1;
    this.updatePaging();
    this.sortColumn= '';
  }

  // Fitur untuk menambahkan data employee
  addEmployee(): void {
    this.router.navigate(['/dashboard/add-employee']);
  }

  // Metode untuk navigasi ke halaman detail employee
  navigateToEmployeeDetail(username: string): void {
    // Rute bernama 'employee-detail/:username'
    this.router.navigate(['/dashboard/employee-detail', username]);
  }

  //Fitur untuk edit employee
  editToEmployee(username: string): void {
    console.log("Edit: "+username);
  }

  // Fitur untuk membuka modal
  openModal(username: string) {
    this.modalVisible = true;
    this.selectedUsername = username;
  }

  //Fitur untuk delate employee
  delateToEmployee(): void {
    if (this.selectedUsername) {
      console.log("Delete: " + this.selectedUsername);
      // Tambahkan logika penghapusan di sini
    } else {
      console.log("No username selected.");
    }
  }

  //Fitur untuk menutup modal
  onClose() {
    this.modalVisible = false; // Menutup modal ketika tombol close diklik
  }
}
