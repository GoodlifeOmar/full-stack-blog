import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map(comment => (
        <div className="comment" key={comment.postedBy + ': ' + comment.text}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

CommentsList.propTypes = {
    comments : PropTypes.array,
}

export default CommentsList;