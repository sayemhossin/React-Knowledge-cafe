import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,reading_time,author_image,author,posted_date,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between '>
                <div className='flex gap-6'>
                     <img className='w-16' src={author_image} alt="" />
                    <div>
                        <h3 className='text-2xl mb-4'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                   <span>{reading_time} min read</span>
                   <button
                   onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-red-600 text-2xl'
                   ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
            onClick={() => handleMarkAsRead(id,reading_time)}
            className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}


export default Blog;