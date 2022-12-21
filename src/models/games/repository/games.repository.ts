import { IGamesRepository } from './i-games.repository';
import { CreateGamesDto } from '../dto/create-game.dto';
import { UpdateGamesDto } from '../dto/update-game.dto';
import { Game } from '../entities/game.entity';
import { PrismaClient } from '@prisma/client'


export class GamesRepository implements IGamesRepository {
    prisma: any;
    
    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Game[]> {
        return this.prisma.game.findMany();
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.game.findUnique({
            where: {
                id: id
            }
        });
    }

    async findByTitle(title: string): Promise<any> {
        return this.prisma.game.findUnique({
            where: {
                title: title
            },
        });
    }

    async findByGenre(genre: string): Promise<any> {
        return this.prisma.game.findMany({
            where: {
                genre: genre
            },
            orderBy: {
                rating: 'desc'
            }
        });
    }

    async findByDeveloper(developer: string): Promise<any> {
        return this.prisma.game.findMany({
            where: {
                developer: developer
            },
            orderBy: {
                rating: 'desc'
            }
        });
    }

    async findTop(console: string): Promise<any> {
        return this.prisma.game.findMany({
            where: {
                console: console
            },
            orderBy: {
                rating: 'desc'
            },
            take: 10
        });
    }

    async create(createGameDto: CreateGamesDto): Promise<Game> {
        const newGame = {
            ...createGameDto,
            reviews: []
        }

        const game = await this.prisma.game.create({
            data: newGame
        });
        
        return game;
    }

    async update(id: string, updateGameDto: UpdateGamesDto): Promise<Game> {
        const game = await this.prisma.game.update({
            where: {
                id: id
            },
            data: updateGameDto
        });

        return game;
    }

    async remove(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }
}
