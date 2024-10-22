
const bookings = [
    {
      "bookingId": "123456",
      "email": "example1@email.com",
      "startDate": "2024-10-01",
      "endDate": "2024-10-05",
      "status": "Confirmed",
      "reason": "N/A"
    },
    {
      "bookingId": "789101",
      "email": "example2@email.com",
      "startDate": "2024-11-15",
      "endDate": "2024-11-20",
      "status": "Pending",
      "reason": "Awaiting payment"
    },
    {
      "bookingId": "112131",
      "email": "example3@email.com",
      "startDate": "2024-12-05",
      "endDate": "2024-12-10",
      "status": "Canceled",
      "reason": "Client requested cancellation"
    }
  ]


export default function AdminBooking(){ 
    return(
        
         <div className="w-full max-h-[100vh] overflow-y-scroll bg-white p-5 rounded-xl"> 
         <h1 className="text-[25px] font-bold"> Booking Page </h1> 
         <table className="table-auto border-collapse w-full text-left">
            <thead>
                <tr className="text-white bg-sky-500">
                    <th>Booking Id</th> 
                    <th>Email</th>
                    <th>Start date</th>
                    <th>End Date</th> 
                    <th>Status</th>  
                    <th>Reason</th>
                    </tr>
            </thead>

            <tbody>
            <tr className="border-b">
                <td className="px-4 py-2">123456</td>
                <td className="px-4 py-2">example1@email.com</td>
                <td className="px-4 py-2">2024-10-01</td>
                <td className="px-4 py-2">2024-10-05</td>
                <td className="px-4 py-2">Confirmed</td>
                <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b">
                <td className="px-4 py-2">789101</td>
                <td className="px-4 py-2">example2@email.com</td>
                <td className="px-4 py-2">2024-11-15</td>
                <td className="px-4 py-2">2024-11-20</td>
                <td className="px-4 py-2">Pending</td>
                <td className="px-4 py-2">Awaiting payment</td>
            </tr>
            <tr className="border-b">
                <td className="px-4 py-2">112131</td>
                <td className="px-4 py-2">example3@email.com</td>
                <td className="px-4 py-2">2024-12-05</td>
                <td className="px-4 py-2">2024-12-10</td>
                <td className="px-4 py-2">Canceled</td>
                <td className="px-4 py-2">Client requested cancellation</td>
            </tr>

                {
                    bookings.map(()=>{
                        console.log(booking)
                    })
                }
            </tbody>
         </table>
         </div>
 
    )
}
