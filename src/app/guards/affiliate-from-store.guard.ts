import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateChildFn, Router } from '@angular/router';

export const affiliateFromStoreGuard: CanActivateChildFn = (_route, state) => {

  // 1) Do nothing on the server (SSR)
  const platformId = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformId)) return true;

  // 2) Read affiliate id from storage
  const affId = localStorage.getItem('aff_id');
  if (!affId) return true;
 
  // 3) Get the URL the user is trying to visit
  let url = state.url || '/';
  // 4) If URL already has /ref/, allow it
  if (url.startsWith('/ref/')) return true;
  if(url==='/')
    url=''
  // 5) Otherwise redirect by adding the affiliate id
  return inject(Router).parseUrl(`/ref/${affId}${url}`);
};
