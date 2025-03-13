import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const data: number = Number(value);

    if (isNaN(data)) 
      throw new BadRequestException(`The parameter ${value} is not a valid number or integer`)

    return data;
  }
}
