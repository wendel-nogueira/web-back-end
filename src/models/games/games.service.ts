import { GamesRepository } from './repository/games.repository';
import { CreateGamesDto } from './dto/create-game.dto';
import { UpdateGamesDto } from './dto/update-game.dto';
import { GamesValidator } from './games.validator';
import { ObjectId } from 'mongodb';


export class GamesService {
    gamesRepository: GamesRepository;

    constructor() {
        this.gamesRepository = new GamesRepository();
    }

    async findAll() {
        return await this.gamesRepository.findAll();
    }

    async findOne(id: string) {
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid ID');
        }

        return await this.gamesRepository.findOne(id);
    }

    async findByTitle(title: string) {
        return await this.gamesRepository.findByTitle(title);
    }

    async create(game: CreateGamesDto) {
        const gamesValidator = new GamesValidator();
        await gamesValidator.validateCreateGamesDto(game);

        const titleExists = await this.gamesRepository.findByTitle(game.title);

        if (titleExists) {
            throw new Error('Title already exists');
        }

        return await this.gamesRepository.create(game);
    }

    async update(id: string, user: UpdateGamesDto) {
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid ID');
        }

        return await this.gamesRepository.update(id, user);
    }

    async remove(id: string) {
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid ID');
        }

        return await this.gamesRepository.remove(id);
    }
}
