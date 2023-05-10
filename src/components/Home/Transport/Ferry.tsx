import React, { useState } from 'react';
import ferry from '../../../assets/ferry.png'
import Modal from '@/components/Modal/Modal';
import train from '../../../assets/train.png';
import bus from '../../../assets/bus.png';
// import { clearInterval } from 'timers';


let countNumber: number;
let lastCount: number;



const Ferry = () => {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [bar, setBar] = useState(0);


  // function getLastRow() {
  //   if (lastCount >= 100) {

  //     const getExitRow = setInterval(function () {
  //       setBar((prevBar: number) => {
  //         if (prevBar === 100 && lastCount === 100) {
  //           clearInterval(getExitRow);
  //           console.log("something big is coming..", lastCount, prevBar, "bar", bar);
  //           setProgress(0)
  //           setCount(0)
  //           setBar(0)
  //           console.log("Twitter is the best app...")
  //           getFirstRow()
  //           return 100
  //         } else {
  //           console.log("jill..", prevBar, bar, lastCount)
  //           return prevBar + 5;
  //         }
  //       });
  //     }, 1000);
  //   }
  // }

  // function getSecondRow() {
  //   if (countNumber >= 100) {
  //     interbar
  //   }
  // }


  
  
  // const intervalId = setInterval(() => {
  //   setProgress((prevProgress: number) => {
  //     if (prevProgress === 100) {
  //       console.log("first");
  //       clearInterval(intervalId);
  //       countNumber = prevProgress
  //       setProgress(countNumber)
  //       console.log("second...", countNumber, progress);
        
  //       if (countNumber === 100) {              
  //         console.log("promotion..", countNumber)  
  //         clearInterval(intervalId);         
  //         // getSecondRow()
  //       }
  //       return 100;
  //     } else {
        
  //       console.log("how..", progress, countNumber, prevProgress);
  //       return prevProgress + 10;
  //     }
  //   });
  // }, 1000);
  
  
    
  // const interbar = setInterval(function () {
  //   setCount((prevCount: number) => {
  //     if (prevCount === 100 && countNumber === 100) {
  //       clearInterval(interbar);
  //       lastCount = prevCount
  //       setCount(lastCount)

  //       if (lastCount === 100 ) {
  //         console.log("live boxing..") 
  //         clearInterval(interbar)  
  //         // clearInterval(getFirstRow())          
  //         // getLastRow()
  //       }
  //       console.log("part away of the road..", progress, count, lastCount);
  //       return 100
  //     } else {
  //       // getFirstRow()
  //       clearInterval(intervalId)
  //       console.log("they are the way of the life....", prevCount)
  //       return prevCount + 10;
  //     }
  //   });
  // }, 1000);



  // function getFirstRow(){
  //   if (progress < 100 && progress === 0) {
  //     intervalId
  //   }
  // }



  // function getTimerId (){
  //   setProgress((prevProgress: number) => {
  //     if (prevProgress === 100) {
  //       console.log("first");
  //       // clearInterval(intervalId);
  //       // clearId
  //       // clearInterval(timerId)
  //       // clearInterval(buy)
  //       countNumber = prevProgress
  //       setProgress(countNumber)
  //       console.log("second...", countNumber, progress);
        
  //       if (countNumber === 100) {              
  //         console.log("promotion..", countNumber)  
  //         // clearInterval(intervalId);         
  //         // getSecondRow()
  //       }
  //       return 100;
  //     } else {
        
  //       console.log("how..", progress, countNumber, prevProgress);
  //       return prevProgress + 10;
  //     }
  //   });
  // }

  // const timerId = setInterval(getTimerId, 1000)

  // function buy (){
  //   setInterval(getTimerId, 1000)
  // }

  // const clearId = clearInterval(timerId)

  
  // function showMsg(){
    
  //   console.log("first", numIteming)
  //   numIteming ++
  // }

  // const jetItem = setInterval(showMsg, 1000)

  

  
  const handleButtonClick = () => {
    console.log("far away...", countNumber);
    // showMsg()
    // jetItem


    // timerId
    // buy()
    // interbar
    // getFirstRow()
    console.log("jack")
  };




  return (
    <div>
      <div
        className='bg-slate-900 opacity-60 absolute z-20 h-full w-full'
      >

      </div>
      {/* <div > hello </div> */}
      <div>
        {(progress === 0 || progress !== 100) && (
          <img
            alt="home"
            src={ferry}
            className="z-10"
            style={{
              height: "100vh",
              width: "100%"
            }}
          />

        )}
        {/* <div className='absolute z-50 top-80 text-3xl text-red-800 font-semibold bg-amber-600 w-full h-10'>{countNumber} hello {progress} Hiding {lastCount}</div> */}

        {(progress === 100 && count === 100) && (
          <div>
            <img
              alt="home"
              src={bus}
              className="z-10"
              style={{
                height: "100vh",
                width: "100%"
              }}
            />
        
          </div>
        
        )}
        {(progress === 100 ) && (
          <div>
            <img
              alt="home"
              src={train}
              className="z-10"
              style={{
                height: "100vh",
                width: "100%"
              }}
            />

          </div>

        )}

      </div>
      <span
        className='text-center tracking-wide text-white lg:text-[30px] sm:text-[30px] leading-[20px] absolute z-20 w-full items-center justify-center text-lg font-bold md:top-1/4 xs:top-[25%]'
      >
        The Convenient Way to Buy <span className='underline inline mx-0'>Ferry</span> tickets.
      </span>

      <div className='absolute z-20 md:top-[40%] xs:top-[30%] text-lg w-full items-center justify-center flex'>
        <Modal />
      </div>

      {/* <button onClick={handleButtonClick}>Start Progress</button> */}

      <div className='bottom-0 absolute z-20 text-lg w-full flex justify-end -left-5'>
        <div className='flex bg-[#61297F]'>

          <div className='flex flex-col justify-around  text-white'>
            {/* <div className="progress-bar w-full"></div> */}
            <progress id="file" value={progress} max="100" className='progress-loading w-full'></progress>
            <div className='flex md:py-5 xs:py-2 md:px-7 xs:px-3'>
              <div className='mr-3 flex flex-col items-center justify-center'>
                {/* <div className='text-3xl text-gray-300'>01{progress}</div> */}
              </div>
              <div>
                <div className='font-semibold md:text-sm xs:text-[5px]'>
                  Ferry Transport
                </div>
                <div className='font-light md:text-[10px] xs:text-[4px]'>
                  Get Online Tickets
                </div>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-around text-white'>
            {/* <div className="progress-bar w-full"></div> */}
            <progress id="file" value={count} max="100" className='progress-loading w-full'></progress>
            <div className='flex md:py-5 xs:py-2 pr-7'>
              <div className='md:pl-7 xs:-pl-[.25rem] border-l-[1px] mr-3 flex flex-col items-center justify-center'>
                {/* <div className='text-3xl text-gray-300'>02{count}</div> */}
              </div>
              <div>
                <div className='font-semibold md:text-sm xs:text-[5px]'>
                  Train Transport
                </div>
                <div className='font-light md:text-[10px] xs:text-[4px]'>
                  Get Online Tickets
                </div>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-around text-white'>
            {/* <div className="progress-bar w-full"></div> */}
            <progress id="file" value={bar} max="100" className='progress-loading w-full'></progress>
            <div className='flex md:py-5 xs:py-2 pr-7'>
              <div className='md:pl-7 xs:-pl-[.25rem] border-l-[1px] mr-3 flex flex-col items-center justify-center'>
                {/* <div className='text-3xl text-gray-300'>03{bar}</div> */}
              </div>
              <div className=''>
                <div className='font-semibold md:text-sm xs:text-[5px]'>
                  BRT Transport
                </div>
                <div className='font-light md:text-[10px] xs:text-[4px]'>
                  Get Online Tickets
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>


  )
}

export default Ferry