import { EnumConsole } from '../enums/console.enum';
import { EnumGenre } from '../enums/genre.enum';


export class Game {
    id: string;
    title: string;
    summary: string;
    developer: string;
    genre: EnumGenre;
    console: EnumConsole;
    image: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(partial: Partial<Game>) {
        Object.assign(this, partial);
    }
}
