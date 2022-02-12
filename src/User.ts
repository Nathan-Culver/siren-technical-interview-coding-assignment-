export default class User {
    private friends: User[];
    private movies: string[];
  
    constructor(friends: User[], movies: string[]) {
      this.friends = friends;
      this.movies = movies;
    }
  
    private friendsMovies(searchDepth: number): any {
      let movies: string[];
      if (searchDepth === 0) {
        movies = this.movies;
      } else {
        movies = this.friends.reduce((acc, friend) => {
          return acc.concat(friend.friendsMovies(searchDepth - 1));
        }, this.movies);
      }
      return movies;
    }
  
    public highestMovieCount(searchDepth: Network): string[] {
      let movies = this.friendsMovies(searchDepth);
  
      let counts = movies.reduce((countObj: any, title: string) => {
        countObj[title] = countObj[title] ? countObj[title] + 1 : 1;
        return countObj;
      }, {});
  
      const maxValue = Math.max(...Object.keys(counts).map((x) => counts[x]));
  
      let highestMovieCounts = Object.keys(counts).filter(
        (x) => counts[x] === maxValue
      );
  
      return highestMovieCounts;
    }
  }
  