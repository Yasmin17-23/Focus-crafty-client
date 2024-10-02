import bannerImg1 from '../../assets/bannerImg1.jpg';
import bannerImg2 from '../../assets/bannerImg2.jpg';
import bannerImg3 from '../../assets/bannerImg3.jpg';
import bannerImg4 from '../../assets/bannerImg4.png';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full h-[400px] rounded-xl" />
            <div className='absolute lg:top-28 lg:left-72 flex flex-col justify-center items-center'>
               <h1 className='text-white md:text-3xl font-bold mb-3'>Forest Based Landscape Painting</h1>
               <button className='btn btn-warning text-white'>Explore Now</button>
            </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full h-[400px] rounded-xl" />
             <div className='absolute lg:top-28 lg:left-80 flex flex-col justify-center items-center'>
               <h1 className='text-white md:text-3xl font-bold mb-3'>Mountain View Canvas Painting</h1>
               <button className='btn btn-warning text-white'>Explore Now</button>
            </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full h-[400px] rounded-xl" />
             <div className='absolute lg:top-28 lg:left-72 flex flex-col justify-center items-center'>
               <h1 className='text-white md:text-3xl font-bold mb-3'>Beautiful Floral Watercolor Art</h1>
               <button className='btn btn-warning text-white'>Explore Now</button>
            </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full h-[400px] rounded-xl"/>
             <div className='absolute lg:top-28 lg:left-72 flex flex-col justify-center items-center'>
               <h1 className='text-white md:text-3xl font-bold mb-3'>Superhero Cartoon Design Drawing</h1>
               <button className='btn btn-warning text-white'>Explore Now</button>
            </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;