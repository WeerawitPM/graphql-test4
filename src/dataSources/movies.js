import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Movies extends MongoDataSource {
  async getMovies() {
    return await this.model.find();
  }

  async getMovie(id) {
    return await this.findOneById(id);
  }

  async createMovie({ title, rating, year }) {
    return await this.model.create({ title, rating, year });
  }

  async deleteMovie(args) {
    //console.log(typeof args)
    const deleteMovie = await this.model.deleteOne({_id: args.id});
    if(deleteMovie) return { _id: args.id }
  }

  // async updateMovie({ args }) {
  //   const updateMovie = await this.model.updateOne({ title: args.title, rating: args.rating, year: args.year });
  //   if(updateMovie) return { title: args.title, rating: args.rating, year: args.year }
  // }
}
