import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000/albums'; 
  constructor(private http: HttpClient) { }

  // Get all albums
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single album by ID
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new album
  addAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  // Update an album
  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, album);
  }

  // Delete an album
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
