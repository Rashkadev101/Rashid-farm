//import React from 'react'

const Pure = () => {
  return (
    <>
      <div className='text-white h-[100vh]  max-sm:h-[280vh]'>
        {/**three items */}
        <div className='flex flex-wrap justify-center items-center gap-7  py-16'>
          {/**item1 */}
          <div className="max-sm:m-5 max-sm:w-[440px] bg-[url('https://t3.ftcdn.net/jpg/01/96/91/62/360_F_196916206_mHlfDYUBytGgKv1zMj8qAePImpZsxMrZ.jpg')] bg-no-repeat bg-center bg-cover h-[80vh] w-[40%] rounded-lg">
            <div className='py-80'>
              <h2 className=' text-4xl p-3 font-black capitalize'>100% organic foods</h2>
              <p className='p-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          {/**item2 */}
          <div className="max-sm:w-[440px] bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNF9sb2NhbF9hZnJpY2FuX2Zhcm1lcnNfbnVydHVyZV9hbmRfY3VsdGl2YXRlX180ZDVjNTMzOS01YmM1LTQ5M2QtOGU5Zi1jMzM3YThiODkyOWZfMS5qcGc.jpg')] bg-no-repeat bg-center bg-cover h-[80vh] w-80 rounded-lg">
            <div className='py-80'>
              <h2 className='text-4xl p-3 font-black capitalize'>food served</h2>
              <p className='p-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          {/**item3 */}
          <div className="max-sm:w-[440px] bg-[url('https://media.istockphoto.com/id/1342023741/photo/mixed-race-male-farmer-working-in-vegetable-patch-holding-digital-tablet.jpg?s=612x612&w=0&k=20&c=4AKUe7oFC4zxi4liMxA3-zRy57wFub8LPRq_Z6DVVDQ=')] bg-no-repeat bg-center bg-cover h-[80vh] w-80 rounded-lg">
            <div className='py-80'>
              <h2 className='text-4xl p-3 font-black capitalize'>our products</h2>
              <p className='p-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pure;
