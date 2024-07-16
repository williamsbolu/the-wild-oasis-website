import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// "REVALIDATION" the value specified here in "revaildate" should depend on how often the data changes (in seconds)
// we later made this page dynamic using "searchParams", so this revalidate code dosent apply anymore, only for static pages
export const revalidate = 60; // 1hr
// export const revalidate = 3600; // 1hr
// export const revalidate = 0;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

// The page function we're exporting is a server side rendered components (it would be generated for every request)

// searchParams can also not be known at runtime, meaning whenever we make use of the searchParams, the page can no longer be statically rendered
// It would be dynamically rendered. "export const revalidate = 3600" so this code above no longer takes effect cus it applies to static generated pages, but
// we leave the revalidate code for learning purpose. (note: whenever the searchParams changes, this server component 'page.js' will re-render)

// key={filter} we pass in a key that is unique for each filter to d suspense to re-render the spinner when the users try to filter the cabins (whenever the cabinlist is suspending eg: fetching data), because by default
// suspense woudn't hide the content thats been rendered earlier and display d fallback spinner. so we use the unique key prop for every filter to render the fallback spinner for better UX for d user that data is on its way
