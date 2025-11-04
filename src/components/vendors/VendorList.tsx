
import VendorCard from "./VendorCard";
import { VendorData } from "@/data/vendorsData";

interface VendorListProps {
  vendors: VendorData[];
  title: string;
}

const VendorList = ({ vendors, title }: VendorListProps) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-medium mb-4 pb-2 border-b">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorList;
