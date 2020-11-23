import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private storage: AngularFireStorage) { }

  getArtImgFilesUrls(topic: string) {
    return this.storage.ref(topic).listAll().pipe(
      map(folders => folders.prefixes),
      map(prefixArrays => prefixArrays.map(prefix => prefix.listAll().then(listResult => listResult.items[0].getDownloadURL().then(res => res)))),
    )
  }

}
