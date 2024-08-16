import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies') // = RequestMapping
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') year: string) {
    return `We are searching for a movie with title ${year}`;
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    return `This will return one movie with id ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with id: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
