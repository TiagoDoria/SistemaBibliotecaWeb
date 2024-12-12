export interface ResponseDTO {
    result: any; // Replace 'any' with the specific type of your result data
    message: string;
    isSuccess: boolean;
    statusCode: number;
  }