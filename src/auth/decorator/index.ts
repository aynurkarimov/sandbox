import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    /*
      (data?: string, ctx: ExecutionContext) => {
      if (data) return request.user[data]
    */
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
