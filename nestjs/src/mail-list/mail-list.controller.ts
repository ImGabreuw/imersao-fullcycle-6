import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { MailListService } from './mail-list.service';
import { CreateMailListDto } from './dto/create-mail-list.dto';
import { UpdateMailListDto } from './dto/update-mail-list.dto';

@Controller('mail-list')
export class MailListController {
  constructor(private readonly mailListService: MailListService) {}

  @Post()
  create(@Body() createMailListDto: CreateMailListDto) {
    return this.mailListService.create(createMailListDto);
  }

  @Get()
  async findOne(@Res() res) {
    const email = await this.mailListService.findOne();

    return !email
      ? res.status(HttpStatus.NO_CONTENT).json(null)
      : res.json(email);
  }
}
