import React from 'react'

type Props = {
    sound: {
        id?: number,
        title: string,
        desc?: string,
        icon: JSX.Element,
        color?: string,
    }
};

const Details = ({ sound : {title, icon} } : Props) => {
    return (
        <div className="hover:bg-zinc-100 p-1 lg:w-full md:w-full sm:w-full rounded-xl hover:scale-105 transition-all duration-300">
            <div className='p-1 w-full flex flex-row'>
                <div className='flex flex-row mr-3'>
                    <span className={`p-1 rounded-md hover:scale-105 transition-all duration-300 `}>
                        <div className='text-lg font-light'>{icon}</div>
                    </span>
                </div>
                <div className=''>
                    <div className='text-start mt-1'>
                        <div className="text-[#254664] md:text-xs xs:text-xs sm:text-xs">{title}</div>
                    </div>
                    {/* <div className='text-[#4a647a] md:text-md text-start xs:text-xs '>
                        <span className="desc">{desc}</span>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Details