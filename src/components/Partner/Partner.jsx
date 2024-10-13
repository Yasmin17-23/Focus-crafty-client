import partnerImg1 from '../../assets/partner-img1.png'
import partnerImg2 from '../../assets/partner-img2.png'
import partnerImg3 from '../../assets/partner-img3.png'
import partnerImg4 from '../../assets/partner-img4.png'
import partnerImg5 from '../../assets/partner-img5.png'

const Partner = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-800">Our Trusted Partner</h2>
            <div className='flex flex-col md:flex-row justify-around items-center mt-6'>
                <div>
                   <img src={partnerImg1} alt="" 
                   className='w-32 h-28'/>
                </div>
                <div>
                   <img src={partnerImg2} alt="" className='w-32 h-28'/>
                </div>
                <div>
                   <img src={partnerImg3} alt="" className='w-32 h-28'/>
                </div>
                <div>
                   <img src={partnerImg4} alt="" className='w-32 h-28'/>
                </div>
                <div>
                   <img src={partnerImg5} alt="" className='w-32 h-28'/>
                </div>
            </div>
        </div>
    );
};

export default Partner;