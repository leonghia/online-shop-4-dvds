import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";
import { UserGetDto } from "../users/dtos/user-get.dto";

export class SerializeInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        return next.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                return plainToInstance(UserGetDto, data);
            })
        );
    }

}