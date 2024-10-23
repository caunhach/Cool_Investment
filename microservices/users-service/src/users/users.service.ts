import { Injectable, Query } from '@nestjs/common';
import { UsersDTO } from 'src/users/dto/users.dto';

@Injectable()
export class UsersService {
	private users: UsersDTO[] = [
		{ id: 1, name: 'John', role: 'admin' },
		{ id: 2, name: 'Jane', role: 'user' },
		{ id: 3, name: 'Bob', role: 'user' },
	];

	findAll(@Query('role') role?: string): UsersDTO[] {
		return this.users;
	}

	findById(id: number): UsersDTO {
		return this.users.find((user) => user.id === Number(id));
	}

	findByRole(predicate: (user: UsersDTO) => boolean): UsersDTO[] {
		return this.users.filter((p) => predicate(p));
	}
}
