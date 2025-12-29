import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';

export const affiliateCaptureGuard = (route: ActivatedRouteSnapshot) => {
  const platformId = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformId)) return true;
  const affId = route.paramMap.get('affId');
  if (affId) localStorage.setItem('aff_id', affId);
  return true;
};