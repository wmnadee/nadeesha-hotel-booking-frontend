
const bookings = [
    {
      bookingId: "123456",
      email: "example1@email.com",
      start: new Date("2024-10-01"),
      end: new Date("2024-10-05"),
      status: "Confirmed",
      reason: "N/A"
    },
    {
      bookingId: "789101",
      email: "example2@email.com",
      start: new Date("2024-11-15"),
      end: new Date("2024-11-20"),
      status: "Pending",
      reason: "Awaiting payment"
    },
    {
      bookingId: "112131",
      email: "example3@email.com",
      start: new Date("2024-12-05"),
      end: new Date("2024-12-10"),
      status: "Canceled",
      reason: "Client requested cancellation"
    }
  ]

export default function AdminBookings(){ 
    return(
        
         <div className="w-full max-h-[100vh] overflow-x-hidden overflow-y-hidden bg-white p-5 rounded-xl"> 
         <h1 className="text-[25px] font-bold"> Booking Page </h1>
         <table>
         <thead>
                <tr className="text-white bg-sky-500 ">
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">Booking Id</th> 
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">Email</th>
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">Start</th>
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">End</th> 
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">Status</th>  
                    <th className="px-6 py-3 text-left font-medium uppercase tracking-wider	 border-2 border-slate-200	">Reason</th>
                    </tr>
            </thead>


            <tbody>
          
            {
                    bookings.map(
                        (booking, index)=>{
                            
                            return( 
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200 border-2">
                                    {booking.bookingId}
                                    </td>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200	 border-2">
                                    {booking.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200 border-2">
                                    {booking.start.toString()} 
                                    </td>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200	 border-2">
                                    {booking.end.toString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200	 border-2">
                                    {booking.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-wrap text-sm border-slate-200	 border-2">
                                    {booking.reason}
                                    </td>
                                </tr> 
                         )

                    }) 
                    
                } 
            </tbody>

         </table>


         </div>
 
    )
}
