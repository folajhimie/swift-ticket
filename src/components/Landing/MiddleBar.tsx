
import iphone from '../../assets/pictures/iPhone_13.png';
// import divCol from '../../assets/pictures/col-xs-12.png';
import all from '../../assets/svg/all.svg'





const MiddleBar = () => {
    return (
        <section id='trading' className="">
            <div className='bg-white py-20 px-6'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 justify-between">
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=''>
                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={iphone} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=''>
                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={all} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiddleBar