import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { TokenPayloadDto } from '../dto/token-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SERVER_JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: TokenPayloadDto): Promise<TokenPayloadDto> {
    return { id: payload.id, email: payload.email };
  }
}
