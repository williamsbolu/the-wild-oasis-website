import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-4">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

// we receive the children prop, that is the "page.js file" and also all nested page.js file in the account file structure as children in this layout.js file and output it to the ui
