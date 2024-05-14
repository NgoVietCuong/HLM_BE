import { IsNotEmpty, IsString } from 'class-validator';

export class ChangeAvatarDto {
  @IsString()
  @IsNotEmpty()
  avatar: string;
}
