import { Router } from "./endpoints/Router"

export type Controller = {
    name: string;
    entity: string;
    router: string;
    procedure: any | null;
}