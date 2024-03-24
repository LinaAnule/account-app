import { CanActivateFn } from '@angular/router';

export const filterAccessToAccountGuard: CanActivateFn = (route, state) => {

 return route.params['id'] !== '1';

};

