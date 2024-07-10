"use client";

import { deleteBooking } from "../_lib/actions";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);

      // if we were optimistically adding a data
      //   return [...curBookings, { id: bookingId }];
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);

    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          key={booking.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;

// here unlike other list(i.e like d cabin list) we had to render the reservation list on the client because we wanted to use the useOptimistic hook
// for info about the useOptimistic hook.. rewatch the video
// since useOptimistic hooks only works in client component, it can be used in normal react projects
