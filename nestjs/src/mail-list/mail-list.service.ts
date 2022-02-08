import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMailListDto } from './dto/create-mail-list.dto';
import { MailList, MailListDocument } from './schemas/mail-list.schema';

@Injectable()
export class MailListService {
  constructor(
    @InjectModel(MailList.name)
    private mailListModel: Model<MailListDocument>,
  ) {}

  async create({ emails }: CreateMailListDto) {
    const email = await this.findOne();

    if (!email) {
      return this.mailListModel.create({ emails });
    }

    await email.update({ emails }).exec();

    return this.findOne();
  }

  async findOne() {
    const emails = await this.mailListModel.find().exec();

    return emails.length ? emails[0] : null;
  }
}
