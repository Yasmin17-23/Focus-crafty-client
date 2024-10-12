import artistImg1 from '../../assets/artist-img1.jpeg';
import artistImg2 from '../../assets/artist-img2.jpeg';
import artistImg3 from '../../assets/artist-img3.jpeg';

const FamousArtist = () => {
    return (
        <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-orange-700">Meet Our Famous Artist</h2>
            <hr className="border-2 border-red-700 max-w-sm mx-auto my-4 " />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-white'>
                <div className="card bg-slate-500  shadow-xl">
                    <img src={artistImg1} alt="" 
                    className='w-16 h-16 rounded-full mx-auto mt-4'/>
                    <div className="card-body">
                        <h2 className="card-title">Lithy Rozario</h2>
                        <p>Email: lithy@gmail.com</p>  
                    </div>
                </div>
                <div className="card bg-slate-500  shadow-xl">
                    <img src={artistImg2} alt="" 
                    className='w-16 h-16 rounded-full mx-auto mt-4'/>
                    <div className="card-body">
                        <h2 className="card-title">Lithy Rozario</h2>
                        <p>Email: lithy@gmail.com</p>  
                    </div>
                </div>
                <div className="card bg-slate-500  shadow-xl">
                    <img src={artistImg3} alt="" 
                    className='w-16 h-16 rounded-full mx-auto mt-4'/>
                    <div className="card-body">
                        <h2 className="card-title">Lithy Rozario</h2>
                        <p>Email: lithy@gmail.com</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamousArtist;