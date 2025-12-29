import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const affiliateRedirectGuard: CanActivateFn = (_route, state) => {
  const platformId = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformId)) return true;

  const router = inject(Router);
  const affId = localStorage.getItem('aff_id');
  if (!affId) return true;

  const url = state.url && state.url.length ? state.url : router.url || '/';
  if (url.startsWith('/ref/')) return true;

  return router.parseUrl(`/ref/${affId}${url}`);
};
