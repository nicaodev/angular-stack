import { inject } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

export const getRouteParams = (id: string) => {
  return inject(ActivatedRoute).snapshot.params[id];
}
