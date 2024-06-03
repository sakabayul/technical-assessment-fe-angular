import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUsername: string = '';
  private searchGroup: string = '';
  private searchStatus: string = '';

  setSearchCriteria(username: string, group: string, status: string): void {
    this.searchUsername = username;
    this.searchGroup = group;
    this.searchStatus = status;
  }

  getSearchCriteria(): { username: string; group: string; status: string } {
    return {
      username: this.searchUsername,
      group: this.searchGroup,
      status: this.searchStatus,
    };
  }
}
