import React, { useEffect } from 'react'
import { iSubscribers } from '../../types/Interface'
import axios from 'axios';
import { url } from '../../utils/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const AllSubscribers = () => {

  const [subscribers, setSubscribers] = React.useState<iSubscribers[]>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchSubscribers = async () => {{
      setLoading(true)
      try {
        const allSubs = await axios.get(`${url}/sub/getallsubscribers`)

        // console.log(setSubscribers(allSubs.data))
        setSubscribers(allSubs.data.data)

        setLoading(false)
      } catch (error) {
        console.error("Error getting all subscribers")

        setLoading(false)
      }
    }}

    fetchSubscribers()
  }, [])

  return (
    <div className="md:w-[90%] min-h-screen bg-gray-40 p-6 mt-[100px] ml-[100px] flex items-cente justify-cente bg-white rounded-[10px] font-bold flex-col px-10 gap-6">
        <h1 className="text-[20px] ">All Subscribers</h1>

        {loading ? (
          <div className='w-full flex justify-center items-center'>
            <DatasIsaLoading />
          </div>
        ) : (
        <div className="flex gap-3 flex-wrap">

          {subscribers && subscribers?.map((sub : iSubscribers) => (
            <div key={sub._id} className="flex items-center justify-cente gap-2 p-2 px-4 shadow-md min-w-[300px]  min-h-[40px] rounded-md ">
              <div className="w-[10px] h-[10px] rounded-full bg-black"></div>

              <h1 className="text-[18px] text-orange-400">Email: <span className="font-bold text-black">{sub.email}</span></h1>
            </div>
          ))}

        </div>
        )}
    </div>
  )
}

export default AllSubscribers