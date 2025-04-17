"use client";

type Props = {
  sortBy: string;
  setSortBy: (value: string) => void;
};

export default function Sorting({ sortBy, setSortBy }: Props) {
  return (
    <div className="mb-4 ">
      <select
        className="p-2 border rounded text-sm md:text-base "
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Name (A-Z)</option>
        <option value="price">Price (Low to High)</option>
        <option value="rating">Rating (High to Low)</option>
      </select>
    </div>
  );
}
