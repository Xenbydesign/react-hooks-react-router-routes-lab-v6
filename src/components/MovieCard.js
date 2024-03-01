import {Link} from 'react-router-dom';

//from the movies passed i can pull just what i need as a pram like the title or id 
function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}>
        View Info
      </Link>
    </article>
  );
};

export default MovieCard;