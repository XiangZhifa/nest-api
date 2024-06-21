import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@src/user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userTable: Repository<User>,
  ) {
  }

  create(createUserDto: CreateUserDto) {
    return this.userTable.save(createUserDto);
  }

  findAll() {
    return this.userTable.find();
  }

  findOne(id: number) {
    return this.userTable.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userTable.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userTable.delete(id);
  }
}
