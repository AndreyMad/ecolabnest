import { BadRequestException } from '@nestjs/common';
import { Buffer } from 'buffer';

export const IMAGE_REG_EXP = /^image\/(png|pjpeg|jpeg)$/g;

export const MAX_IMAGE_SIZE = 20971520;

const getMimeTypeFromBase64File = async (
  base64FileData: string,
): Promise<string> => {
  const regExp = new RegExp(/[^:]\w+\/[\w-+\d.]+(?=;|,)/);
  const mimeType = base64FileData.match(regExp);
  return mimeType ? mimeType[0] : '';
};

const getSizeFromBase64File = (base64FileData: string): number => {
  return Buffer.from(base64FileData, 'base64').length;
};

export const validateBase64Image = async (
  base64FileData: string,
): Promise<string> => {
  const regExp = new RegExp(IMAGE_REG_EXP);
  const mimeType = await getMimeTypeFromBase64File(base64FileData);
  const isImage = await regExp.test(mimeType);
  if (!isImage) {
    throw new BadRequestException('Unsupported file format');
  }
  if (getSizeFromBase64File(base64FileData) > MAX_IMAGE_SIZE) {
    throw new BadRequestException('The image is too large');
  }
  return base64FileData.replace(/^data:image\/(png|jpeg|gif);base64,/, '');
};
