import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, default: 'test1' })
  userName: string;

  @ApiProperty({ required: true, default: 'password1' })
  password: string;
}
