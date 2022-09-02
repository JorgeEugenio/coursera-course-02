import { Comment, _Comment } from "./comment";

export class Dish {
    id:                string    = '';
    name:              string    = '';
    image:             string    = '';
    category:          string    = '';
    featured:          boolean   = false;
    label:             string    = '';
    price:             string    = '';
    description:       string    = '';
    comments:          Comment[] = [];
}

export interface _Dish {
    id:                string;
    name:              string;
    image:             string;
    category:          string;
    featured:          boolean;
    label:             string;
    price:             string;
    description:       string;
    comments:          _Comment[];
}
