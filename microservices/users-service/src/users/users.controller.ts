import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersDTO } from 'src/users/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}
	@Get()
	getUsersAll(@Query('role') userRole?: string): UsersDTO[] {
		if (userRole) {
			return this.usersService.findByRole((user) => 
				user.role.includes(userRole),
			);
		}
		return this.usersService.findAll();
	}

	@Get(':id')
	getUserById(@Param('id') id: string) {
		return this.usersService.findById(Number(id));
	}
}
