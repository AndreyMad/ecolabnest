import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private static saltRounds = 10;

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.userService.findOne({ email });

    if (!user) {
      return null;
    }

    const isPasswordEqual = await AuthService.compareHash(pass, user.password);

    return user && isPasswordEqual ? user : null;
  }

  async login(login) {
    const user = await this.userService.findOne({ email: login.username });
    if (!user) {
      throw new BadRequestException('Email or password is not valid');
    }
    const isPasswordValid = await user.compareHash(login.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Email or password is not valid');
    }
    const jwt = await this.jwtService.signAsync({ ...user });

    return {
      ...user,
      token: jwt,
    };
  }

  async decode(jwt: string): Promise<ReturnType<JwtService['decode']>> {
    return this.jwtService.decode(jwt);
  }

  static async getHash(password: string): Promise<string> {
    return bcrypt.hash(password, AuthService.saltRounds);
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async me(id: number) {
    return await this.userService.findOne({ id });
  }
}
